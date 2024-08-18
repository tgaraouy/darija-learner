<template>
  <v-app>
    <v-main>
      <DarijaLearner />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import DarijaLearner from './components/DarijaLearner.vue'

export default defineComponent({
  name: 'App',
  components: {
    DarijaLearner
  }
})
</script>