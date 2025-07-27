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
        <SectionHeader
          title="Our Services"
          description="From concept to launch, we handle every aspect of your web presence"
        />

        <div class="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Design"
            description="Beautiful, user-friendly designs that convert visitors into customers"
            icon="i-heroicons-paint-brush"
            link="/services#web-design"
          />
          <ServiceCard
            title="Web Development"
            description="Fast, responsive websites built with modern technologies"
            icon="i-heroicons-code-bracket"
            link="/services#web-development"
          />
          <ServiceCard
            title="Software Development"
            description="Custom software solutions to streamline your business operations"
            icon="i-heroicons-cpu-chip"
            link="/services#software-solutions"
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4">
        <SectionHeader
          title="Why Choose IntegraBlue Web Agency?"
          description="What sets us apart from other web agencies"
        />
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="space-y-6">
              <CheckItem
                title="Modern Technology Stack"
                description="Built with Nuxt 3, Vue.js, and the latest web technologies for optimal performance"
              />
              <CheckItem
                title="Small Business Focus"
                description="We understand the unique challenges and opportunities that small businesses face"
              />
              <CheckItem
                title="Ongoing Support"
                description="We don't just build your website - we're here to help it grow and evolve"
              />
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
        <SectionHeader
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from the businesses we've helped"
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ClientTestimonial
            client-name="S. Johnson"
            title="CEO, Technology Startup"
            testimonial="IntegraBlue transformed our online presence completely. Our new website is fast, beautiful, and has already increased our leads by 40%."
          />
          <ClientTestimonial
            client-name="M. Chen"
            title="Founder, Business Consulting Firm"
            testimonial="The team at IntegraBlue is professional, responsive, and truly understands what small businesses need. Highly recommended!"
          />
          <ClientTestimonial
            client-name="E. Rodriguez"
            title="Marketing Director, Creative Agency"
            testimonial="From the initial consultation to the final launch, every step was smooth and professional. Our new website exceeded expectations."
          />
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
