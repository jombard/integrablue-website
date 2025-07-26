<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white shadow-lg'
        : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <span
              :class="[
                'text-2xl font-bold transition-all duration-300',
                isScrolled ? 'text-blue-600' : 'text-white',
              ]"
            >
              IntegraBlue
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
              $route.path === '/' && isScrolled
                ? 'text-blue-600 bg-blue-50'
                : '',
              $route.path === '/' && !isScrolled
                ? 'text-white bg-blue-800/30'
                : '',
            ]"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
              $route.path === '/about' && isScrolled
                ? 'text-blue-600 bg-blue-50'
                : '',
              $route.path === '/about' && !isScrolled
                ? 'text-white bg-blue-800/30'
                : '',
            ]"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/services"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
              $route.path === '/services' && isScrolled
                ? 'text-blue-600 bg-blue-50'
                : '',
              $route.path === '/services' && !isScrolled
                ? 'text-white bg-blue-800/30'
                : '',
            ]"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
              $route.path === '/portfolio' && isScrolled
                ? 'text-blue-600 bg-blue-50'
                : '',
              $route.path === '/portfolio' && !isScrolled
                ? 'text-white bg-blue-800/30'
                : '',
            ]"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/contact"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
              $route.path === '/contact' && isScrolled
                ? 'text-blue-600 bg-blue-50'
                : '',
              $route.path === '/contact' && !isScrolled
                ? 'text-white bg-blue-800/30'
                : '',
            ]"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
              'focus:outline-none transition-colors duration-300',
              isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-blue-100 hover:text-white',
            ]"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="isMobileMenuOpen" class="md:hidden">
      <div
        :class="[
          'px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300',
          isScrolled ? 'bg-white' : 'bg-blue-800',
        ]"
      >
        <NuxtLink
          to="/"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-blue-100 hover:text-white',
            $route.path === '/' && isScrolled ? 'text-blue-600 bg-blue-50' : '',
            $route.path === '/' && !isScrolled
              ? 'text-white bg-blue-700/50'
              : '',
          ]"
          @click="isMobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-blue-100 hover:text-white',
            $route.path === '/about' && isScrolled
              ? 'text-blue-600 bg-blue-50'
              : '',
            $route.path === '/about' && !isScrolled
              ? 'text-white bg-blue-700/50'
              : '',
          ]"
          @click="isMobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-blue-100 hover:text-white',
            $route.path === '/services' && isScrolled
              ? 'text-blue-600 bg-blue-50'
              : '',
            $route.path === '/services' && !isScrolled
              ? 'text-white bg-blue-700/50'
              : '',
          ]"
          @click="isMobileMenuOpen = false"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/portfolio"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-blue-100 hover:text-white',
            $route.path === '/portfolio' && isScrolled
              ? 'text-blue-600 bg-blue-50'
              : '',
            $route.path === '/portfolio' && !isScrolled
              ? 'text-white bg-blue-700/50'
              : '',
          ]"
          @click="isMobileMenuOpen = false"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-blue-100 hover:text-white',
            $route.path === '/contact' && isScrolled
              ? 'text-blue-600 bg-blue-50'
              : '',
            $route.path === '/contact' && !isScrolled
              ? 'text-white bg-blue-700/50'
              : '',
          ]"
          @click="isMobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "SiteNavigation",
  setup() {
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      // Check initial scroll position
      handleScroll();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isMobileMenuOpen,
      isScrolled,
    };
  },
});
</script>
