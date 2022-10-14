<template>
<h1>hello welcome home</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';




export default defineComponent({


  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
});
</script>
