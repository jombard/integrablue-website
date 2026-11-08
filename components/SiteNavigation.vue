<template>
  <nav
    class="sticky top-0 z-50 border-b border-hairline bg-canvas"
    aria-label="Primary"
  >
    <div class="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8">
      <!-- Wordmark (de-facto logo): plain "IntegraBlue", two-tone. The
           registered "IntegraBlue Web Agency Limited" lives only in the footer. -->
      <NuxtLink
        to="/"
        class="text-xl font-extrabold tracking-tight"
        aria-label="IntegraBlue home"
      >
        <span class="text-fg">Integra</span><span class="text-sky">Blue</span>
      </NuxtLink>

      <!-- Desktop navigation -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :aria-current="isCurrent(link.to) ? 'page' : undefined"
            :class="[
              'text-sm font-medium underline underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-sky',
              isCurrent(link.to) ? 'text-fg decoration-sky' : 'text-fg-muted decoration-hairline',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-fg-muted transition-colors duration-150 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile navigation -->
    <div v-show="isMobileMenuOpen" id="mobile-menu" class="border-t border-hairline md:hidden">
      <ul class="space-y-1 px-5 py-3">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :aria-current="isCurrent(link.to) ? 'page' : undefined"
            :class="[
              'block rounded-lg px-3 py-2 text-base font-medium underline underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-sky',
              isCurrent(link.to) ? 'text-fg decoration-sky' : 'text-fg-muted decoration-hairline',
            ]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
/**
 * The four — and only four — destinations of the contractor brand
 * (website-revamp.md, ticket 6). The agency-era Services and Portfolio entries
 * are retired; their routes now serve redirect stubs but never appear in nav.
 * Both the desktop and mobile menus render from this one list, so the nav
 * cannot drift out of sync with itself.
 */
const links = [
  { label: "Home", to: "/" },
  { label: "Small builds", to: "/small-builds" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const route = useRoute();

/** Whether a nav destination is the page currently being viewed. Matches the
 * route exactly or a nested path under it, so "/about" never lights up for a
 * sibling like "/about-us". */
function isCurrent(to: string): boolean {
  return to === "/"
    ? route.path === "/"
    : route.path === to || route.path.startsWith(`${to}/`);
}

const isMobileMenuOpen = ref(false);
</script>
