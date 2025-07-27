<template>
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
      <div class="flex text-yellow-400">
        <UIcon
          name="i-heroicons-star-solid"
          class="w-5 h-5"
          v-for="i in 5"
          :key="i"
        />
      </div>
    </div>
    <p class="text-gray-600 mb-6 italic">"{{ testimonial }}"</p>
    <div class="flex items-center">
      <div
        class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
      >
        <UIcon name="i-heroicons-user" class="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <p class="font-semibold text-gray-900">{{ clientName }}</p>
        <p class="text-sm text-gray-500">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    clientName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
