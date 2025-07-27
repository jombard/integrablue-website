<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="close"
  >
    <div class="bg-white rounded-lg max-w-md w-full p-6" @click.stop>
      <div class="flex items-center gap-3 mb-4">
        <UIcon
          name="i-heroicons-exclamation-triangle"
          class="w-6 h-6 text-red-600"
        />
        <h3 class="text-lg font-semibold text-gray-900">
          {{ title }}
        </h3>
      </div>

      <p class="text-gray-600 mb-6">
        {{ message }}
      </p>

      <div class="flex justify-end gap-3">
        <UButton variant="outline" @click="close"> Close </UButton>
        <UButton v-if="retry" color="primary" @click="retry">
          Try Again
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  title?: string;
  message: string;
  retry?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Error",
});

const emit = defineEmits<{
  close: [];
}>();

const close = () => {
  emit("close");
};
</script>
