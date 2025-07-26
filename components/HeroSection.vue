<template>
  <section
    class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32"
  >
    <div class="ui-container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {{ titleWhite }}
          <span class="text-blue-200">{{ titleBlue }}</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          {{ description }}
        </p>
        <div class="flex sm:flex-row gap-4 justify-center">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    titleWhite: {
      type: String,
      default: "",
    },
    titleBlue: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>
