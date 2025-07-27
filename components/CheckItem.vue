<template>
  <div class="flex items-start gap-4">
    <div
      class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
    >
      <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600">
        {{ description }}
      </p>
    </div>
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
