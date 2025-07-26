<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32"
    >
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span class="text-blue-200">IntegraBlue Web Agency</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We're passionate about helping small businesses and startups succeed
            in the digital world
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story and Mission -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Our Story
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded in 2024, IntegraBlue Web Agency was born from a simple
              belief: every business, regardless of size, deserves access to
              world-class web solutions.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              We started as a small team of developers and designers who were
              frustrated by the lack of affordable, high-quality web services
              for small businesses. Too often, we saw promising companies
              struggle with outdated websites or expensive solutions that didn't
              fit their needs.
            </p>
            <p class="text-lg text-gray-600">
              Today, we're proud to serve growing businesses across the UK,
              helping them establish strong online presences that drive real
              results.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
          >
            <div class="text-center">
              <UIcon
                name="i-heroicons-light-bulb"
                class="w-16 h-16 text-blue-600 mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p class="text-gray-600">
                To democratize access to professional web development by
                providing small businesses and startups with modern, scalable,
                and affordable web solutions that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Values
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon name="i-heroicons-heart" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Passion for Quality
            </h3>
            <p class="text-gray-600">
              We believe that every project, no matter the size, deserves our
              full attention and commitment to excellence.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon name="i-heroicons-users" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Client Partnership
            </h3>
            <p class="text-gray-600">
              We work closely with our clients, treating their success as our
              success and building long-term relationships.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-sparkles"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p class="text-gray-600">
              We stay at the forefront of web technologies to deliver
              cutting-edge solutions that give our clients a competitive edge.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-shield-check"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Transparency
            </h3>
            <p class="text-gray-600">
              We believe in clear communication, honest pricing, and keeping our
              clients informed every step of the way.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Reliability
            </h3>
            <p class="text-gray-600">
              We deliver on our promises, meet deadlines, and provide ongoing
              support to ensure our clients' success.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-academic-cap"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Continuous Learning
            </h3>
            <p class="text-gray-600">
              We're constantly learning and improving our skills to provide the
              best possible solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section (Placeholder) -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Team
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate professionals behind IntegraBlue
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-lg text-center"
        >
          <UIcon
            name="i-heroicons-user-group"
            class="w-20 h-20 text-blue-600 mx-auto mb-6"
          />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">
            Growing Our Team
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're currently expanding our team of talented developers,
            designers, and digital strategists. If you're passionate about
            helping small businesses succeed and want to work with cutting-edge
            technologies, we'd love to hear from you.
          </p>
          <UButton color="primary" size="lg"> Join Our Team </UButton>
        </div>
      </div>
    </section>

    <!-- Why Choose IntegraBlue -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Why Choose IntegraBlue Web Agency?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            What sets us apart from other web agencies
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <div
                class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Small Business Specialists
                </h3>
                <p class="text-gray-600">
                  We understand the unique challenges and opportunities that
                  small businesses face in the digital landscape.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Modern Technology Stack
                </h3>
                <p class="text-gray-600">
                  We use the latest technologies like Nuxt 3, Vue.js, and modern
                  CSS frameworks to build fast, scalable websites.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p class="text-gray-600">
                  No hidden fees or surprises. We provide clear, upfront pricing
                  for all our services.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p class="text-gray-600">
                  We don't just build your website and walk away. We're here to
                  help you grow and succeed.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Our Approach
            </h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                >
                  1
                </div>
                <span class="text-gray-700">Discovery & Planning</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                >
                  2
                </div>
                <span class="text-gray-700">Design & Development</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                >
                  3
                </div>
                <span class="text-gray-700">Testing & Launch</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                >
                  4
                </div>
                <span class="text-gray-700">Support & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work Together?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how IntegraBlue can help your business succeed online
        </p>
        <div class="flex sm:flex-row gap-4 justify-center">
          <UButton
            size="lg"
            color="primary"
            variant="solid"
            class="font-semibold"
          >
            Get Started
          </UButton>
          <UButton
            size="lg"
            variant="outline"
            class="border-white text-white hover:bg-white hover:text-blue-900"
          >
            View Our Work
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About Us - IntegraBlue Web Agency",
  meta: [
    {
      name: "description",
      content:
        "Learn about IntegraBlue Web Agency - our story, mission, values, and why we're the perfect partner for small businesses and startups.",
    },
  ],
});
</script>
