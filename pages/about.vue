<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection
      title-white="About"
      title-blue="IntegraBlue Web Agency"
      description="We're passionate about helping small businesses and startups succeed in the digital world"
    />

    <!-- Company Story and Mission -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Story"
          description="The journey that led us to where we are today"
        />
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
        <SectionHeader
          title="Our Values"
          description="The principles that guide everything we do"
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            title="Passion for Quality"
            description="We believe that every project, no matter the size, deserves our full attention and commitment to excellence."
            icon="i-heroicons-heart"
          />
          <ValueCard
            title="Client Partnership"
            description="We work closely with our clients, treating their success as our success and building long-term relationships."
            icon="i-heroicons-users"
          />
          <ValueCard
            title="Innovation"
            description="We stay at the forefront of web technologies to deliver cutting-edge solutions that give our clients a competitive edge."
            icon="i-heroicons-sparkles"
          />
          <ValueCard
            title="Transparency"
            description="We believe in clear communication, honest pricing, and keeping our clients informed every step of the way."
            icon="i-heroicons-shield-check"
          />
          <ValueCard
            title="Reliability"
            description="We deliver on our promises, meet deadlines, and provide ongoing support to ensure our clients' success."
            icon="i-heroicons-clock"
          />
          <ValueCard
            title="Continuous Learning"
            description="We're constantly learning and improving our skills to provide the best possible solutions for our clients."
            icon="i-heroicons-academic-cap"
          />
        </div>
      </div>
    </section>

    <!-- Team Section (Placeholder) -->
    <!-- <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose IntegraBlue Web Agency?"
          description="What sets us apart from other web agencies"
        />

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
    </section> -->

    <!-- Why Choose IntegraBlue -->
    <section class="py-20 bg-white">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="Why Choose IntegraBlue Web Agency?"
          description="What sets us apart from other web agencies"
        />

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <CheckItem
              title="Small Business Specialists"
              description="We understand the unique challenges and opportunities that small businesses face in the digital landscape."
            />
            <CheckItem
              title="Modern Technology Stack"
              description="We use the latest technologies like Nuxt 3, Vue.js, and modern CSS frameworks to build fast, scalable websites."
            />
            <CheckItem
              title="Transparent Pricing"
              description="No hidden fees or surprises. We provide clear, upfront pricing for all our services."
            />
            <CheckItem
              title="Ongoing Support"
              description="We don't just build your website and walk away. We're here to help you grow and succeed."
            />
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
    <CallToActionSection
      title="Ready to Work Together?"
      description="Let's discuss how IntegraBlue can help your business succeed online"
    />
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
