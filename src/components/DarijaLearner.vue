<template>
  <v-container>
    <h1 class="text-center mb-4">Learn Darija</h1>
    <v-row>
      <v-col cols="6">
        <v-card class="mb-4">
          <v-card-title>Moroccan Avatar</v-card-title>
          <v-card-text>
            <v-img src="https://example.com/moroccan-avatar.png" height="200"></v-img>
          </v-card-text>
        </v-card>
        <v-btn @click="speakWord" color="primary">Speak Word</v-btn>
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
            <p><strong>Usage (Darija):</strong> {{ currentWord.usageDarija }}</p>
            <p><strong>Usage (French):</strong> {{ currentWord.usageFrench }}</p>
            <p><strong>Usage (English):</strong> {{ currentWord.usageEnglish }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="nextWord" color="secondary" class="mt-4">Next Word</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'DarijaLearner',
  data() {
    return {
      words: [
        {
          darija: 'عندي',
          phonetic: '3ndi',
          arabicScript: 'عَنْدِيْ',
          msaEquivalent: 'لدي',
          region: 'Casablanca',
          usageDarija: 'عندي موعد مع الطبيب.',
          usageFrench: "J'ai un rendez-vous chez le médecin.",
          usageEnglish: "I have a doctor's appointment."
        },
        // Add more words from your dataset here
      ],
      currentWordIndex: 0
    }
  },
  computed: {
    currentWord() {
      return this.words[this.currentWordIndex] || {}
    }
  },
  methods: {
    nextWord() {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
    },
    speakWord() {
      const utterance = new SpeechSynthesisUtterance(this.currentWord.darija);
      utterance.lang = 'ar-MA'; // Moroccan Arabic
      speechSynthesis.speak(utterance);
    }
  }
}
</script>