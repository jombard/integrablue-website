<template>
  <div class="text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
      {{ title }}
    </h2>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
