<template>
  <div>
    <SiteNavigation />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
