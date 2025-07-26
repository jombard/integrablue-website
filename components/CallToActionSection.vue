<template>
  <section class="py-20 bg-blue-900 text-white">
    <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ title }}</h2>
      <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <div class="flex sm:flex-row gap-4 justify-center">
        <UButton
          size="lg"
          color="primary"
          variant="solid"
          class="font-semibold"
          @click="contactUs"
        >
          Start Your Project
        </UButton>
        <UButton
          size="lg"
          variant="outline"
          class="border-white text-white hover:bg-white hover:text-blue-900"
          @click="contactUs"
        >
          Schedule a Consultation
        </UButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  setup() {
    const contactUs = () => {
      navigateTo("/contact");
    };

    return {
      contactUs,
    };
  },
});
</script>
