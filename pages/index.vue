<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection
      title-white="Modern Web Solutions for"
      title-blue="Growing Businesses"
      description="We build fast, beautiful, and scalable websites that help small businesses and startups succeed online."
    >
      <UButton
        size="lg"
        color="primary"
        variant="solid"
        class="font-semibold"
        @click="navigateTo('/contact')"
      >
        Get Started
      </UButton>
      <UButton
        size="lg"
        variant="outline"
        class="border-white text-white hover:bg-white hover:text-blue-900"
        @click="navigateTo('/portfolio')"
      >
        View Our Work
      </UButton>
    </HeroSection>

    <!-- Services Overview Section -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Services
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of your web presence
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-paint-brush"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Web Design</h3>
            <p class="text-gray-600 mb-4">
              Beautiful, user-friendly designs that convert visitors into
              customers
            </p>
            <UButton
              variant="link"
              color="primary"
              class="p-0"
              @click="navigateTo('/services#web-design')"
            >
              Learn More →
            </UButton>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-code-bracket"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Web Development
            </h3>
            <p class="text-gray-600 mb-4">
              Fast, responsive websites built with modern technologies
            </p>
            <UButton
              variant="link"
              color="primary"
              class="p-0"
              @click="navigateTo('/services#web-development')"
            >
              Learn More →
            </UButton>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-cpu-chip"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Software Development
            </h3>
            <p class="text-gray-600 mb-4">
              Custom software solutions to streamline your business operations
            </p>
            <UButton
              variant="link"
              color="primary"
              class="p-0"
              @click="navigateTo('/services#software-solutions')"
            >
              Learn More →
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Why Choose IntegraBlue Web Agency?
            </h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Modern Technology Stack
                  </h3>
                  <p class="text-gray-600">
                    Built with Nuxt 3, Vue.js, and the latest web technologies
                    for optimal performance
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Small Business Focus
                  </h3>
                  <p class="text-gray-600">
                    We understand the unique challenges and opportunities that
                    small businesses face
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Ongoing Support
                  </h3>
                  <p class="text-gray-600">
                    We don't just build your website - we're here to help it
                    grow and evolve
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
          >
            <div class="text-center">
              <UIcon
                name="i-heroicons-rocket-launch"
                class="w-16 h-16 text-blue-600 mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Ready to Get Started?
              </h3>
              <p class="text-gray-600 mb-6">
                Let's discuss how we can help your business succeed online
              </p>
              <UButton
                color="primary"
                size="lg"
                @click="navigateTo('/contact')"
              >
                Schedule a Consultation
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <CallToActionSection
      title="Ready to Transform Your Online Presence?"
      description="Join the growing number of businesses that trust IntegraBlue to build their digital future"
    />

    <!-- Client Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've
            helped
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "IntegraBlue transformed our online presence completely. Our new
              website is fast, beautiful, and has already increased our leads by
              40%."
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
              >
                <UIcon name="i-heroicons-user" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p class="font-semibold text-gray-900">Sarah Johnson</p>
                <p class="text-sm text-gray-500">CEO, TechStart Solutions</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "The team at IntegraBlue is professional, responsive, and truly
              understands what small businesses need. Highly recommended!"
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
              >
                <UIcon name="i-heroicons-user" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p class="font-semibold text-gray-900">Michael Chen</p>
                <p class="text-sm text-gray-500">
                  Founder, GreenLeaf Consulting
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "From the initial consultation to the final launch, every step was
              smooth and professional. Our new website exceeded expectations."
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
              >
                <UIcon name="i-heroicons-user" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p class="font-semibold text-gray-900">Emily Rodriguez</p>
                <p class="text-sm text-gray-500">
                  Marketing Director, Bright Ideas Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Use Nuxt 3 Composition API
useHead({
  title: "IntegraBlue Web Agency - Modern Web Solutions for Small Businesses",
  meta: [
    {
      name: "description",
      content:
        "IntegraBlue Web Agency specializes in modern web design and development for small businesses and startups. Built with Nuxt 3 and Vue.js.",
    },
  ],
});
</script>
