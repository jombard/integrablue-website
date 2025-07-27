<template>
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <div
      class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
    >
      <UIcon :name="icon" class="w-6 h-6 text-blue-600" />
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-4">
      {{ title }}
    </h3>
    <p class="text-gray-600">
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
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
