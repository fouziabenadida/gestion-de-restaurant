<template>
  <v-app>
   <SignUp/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignUp from './components/SignUp.vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
  components: {
    SignUp
  }
})
</script>
