<template>
  <v-container>
    <v-overlay v-if="!hasUserInteracted" :model-value="!hasUserInteracted">
      <v-card>
        <v-card-title>Welcome to Darija Learner!</v-card-title>
        <v-card-text>
          Click the button below to enable audio features.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="initializeAudio">
            Enable Audio
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>

    <h1 class="text-center mb-4">Learn Darija</h1>
    <v-row v-if="currentWord">
      <v-col cols="6">
        <v-card>
          <v-card-title>Usage Examples</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(example, index) in currentWord.usageDarija" :key="index">
                <v-list-item-title>{{ example }}</v-list-item-title>
                <template v-slot:append>
                  <v-btn icon @click="speakExample(example)" :disabled="isSpeaking || !isSpeechAvailable">
                    <v-icon>mdi-volume-high</v-icon>
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-btn @click="speakWord" color="primary" class="mr-2 mt-4" :disabled="isSpeaking || !isSpeechAvailable">
          Speak Word
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Word Information</v-card-title>
          <v-card-text>
            <p><strong>Darija:</strong> {{ currentWord.darija }}</p>
            <p><strong>Phonetic:</strong> {{ currentWord.phonetic }}</p>
            <p><strong>Arabic Script:</strong> {{ currentWord.arabicScript }}</p>
            <p><strong>MSA Equivalent:</strong> {{ currentWord.msaEquivalent }}</p>
            <p><strong>Region:</strong> {{ currentWord.region }}</p>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>Usage (French)</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul>
                    <li v-for="(usage, index) in currentWord.usageFrench" :key="index">
                      {{ usage }}
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>Usage (English)</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul>
                    <li v-for="(usage, index) in currentWord.usageEnglish" :key="index">
                      {{ usage }}
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="nextWord" color="info" class="mt-4">Next Word</v-btn>
  </v-container>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'DarijaLearner',
  setup() {
    const words = ref([])
    const currentWordIndex = ref(0)
    const isSpeaking = ref(false)
    const isSpeechAvailable = ref(false)
    const hasUserInteracted = ref(false)

    const fetchWords = async () => {
      try {
        const response = await axios.get('http://localhost:3000/words')
        words.value = response.data
      } catch (error) {
        console.error('Error fetching words:', error)
      }
    }

    onMounted(() => {
      fetchWords()
      checkSpeechAvailability()
    })

    const checkSpeechAvailability = () => {
      if ('speechSynthesis' in window) {
        speechSynthesis.onvoiceschanged = () => {
          const voices = speechSynthesis.getVoices()
          isSpeechAvailable.value = voices.length > 0
        }
      } else {
        isSpeechAvailable.value = false
      }
    }

    const currentWord = computed(() => words.value[currentWordIndex.value] || null)

    const nextWord = () => {
      currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length
    }

    const initializeAudio = () => {
      hasUserInteracted.value = true
      const silentAudio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
      silentAudio.play().catch(error => console.error('Silent audio error:', error))
    }

    const speak = (text) => {
      return new Promise((resolve, reject) => {
        if (!isSpeechAvailable.value) {
          console.warn('Speech synthesis is not available')
          reject('Speech synthesis not available')
          return
        }

        if (!hasUserInteracted.value) {
          console.warn('User interaction required')
          reject('User interaction required')
          return
        }

        const utterance = new SpeechSynthesisUtterance(text)
        
        const voices = speechSynthesis.getVoices()
        const moroccanVoice = voices.find(voice => voice.lang === 'ar-MA')
        const arabicVoice = voices.find(voice => voice.lang.startsWith('ar'))
        const englishVoice = voices.find(voice => voice.lang === 'en-US')
        
        utterance.voice = moroccanVoice || arabicVoice || englishVoice || null

        utterance.onend = resolve
        utterance.onerror = reject

        speechSynthesis.speak(utterance)
      })
    }

    const speakWord = async () => {
      if (currentWord.value && isSpeechAvailable.value && hasUserInteracted.value) {
        try {
          isSpeaking.value = true
          await speak(currentWord.value.darija)
        } catch (error) {
          console.error('Speech synthesis error:', error)
        } finally {
          isSpeaking.value = false
        }
      }
    }

    const speakExample = async (example) => {
      if (isSpeechAvailable.value && hasUserInteracted.value) {
        try {
          isSpeaking.value = true
          await speak(example)
        } catch (error) {
          console.error('Speech synthesis error:', error)
        } finally {
          isSpeaking.value = false
        }
      }
    }

    return {
      currentWord,
      nextWord,
      speakWord,
      speakExample,
      isSpeaking,
      isSpeechAvailable,
      hasUserInteracted,
      initializeAudio
    }
  }
})
</script>