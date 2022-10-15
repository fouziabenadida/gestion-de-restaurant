<template>
  <LayoutView></LayoutView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutView from "@/views/LayoutView.vue";
export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
  components: {
    LayoutView,
  },
});
</script>
