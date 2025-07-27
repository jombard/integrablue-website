<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection
      title-white="Our"
      title-blue="Services"
      description="Comprehensive web solutions designed to help your business grow and succeed online"
    />

    <!-- Services Overview -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="What We Offer"
          description="From initial concept to ongoing support, we handle every aspect of your digital presence"
        />

        <div class="grid lg:grid-cols-3 gap-8">
          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-paint-brush"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Web Design
            </h3>
            <p class="text-gray-600 mb-6">
              Beautiful, user-friendly designs that convert visitors into
              customers and reflect your brand identity.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Responsive design for all devices
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                User experience optimization
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Brand identity integration
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Conversion-focused layouts
              </li>
            </ul>
            <UButton
              color="primary"
              variant="solid"
              class="w-full"
              @click="navigateTo('#web-design')"
            >
              Learn More
            </UButton>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-code-bracket"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Web Development
            </h3>
            <p class="text-gray-600 mb-6">
              Fast, responsive websites built with the right technologies for
              your specific needs and goals.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Technology-agnostic approach
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                SEO-optimized code
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Performance optimization
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Content management systems
              </li>
            </ul>
            <UButton
              color="primary"
              variant="solid"
              class="w-full"
              @click="navigateTo('#web-development')"
            >
              Learn More
            </UButton>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
            >
              <UIcon
                name="i-heroicons-cpu-chip"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Software Development
            </h3>
            <p class="text-gray-600 mb-6">
              Custom software solutions to streamline your business operations
              and improve efficiency.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Custom web applications
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                API development
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Database design
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Third-party integrations
              </li>
            </ul>
            <UButton
              color="primary"
              variant="solid"
              class="w-full"
              @click="navigateTo('#software-solutions')"
            >
              Learn More
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process/Workflow -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Process"
          description="A proven methodology that ensures your project is delivered on time and exceeds expectations"
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
            >
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
            <p class="text-gray-600">
              We start by understanding your business goals, target audience,
              and requirements to create a tailored solution.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Planning</h3>
            <p class="text-gray-600">
              We create detailed project plans, wireframes, and technical
              specifications to ensure everyone is aligned.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
            >
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Development
            </h3>
            <p class="text-gray-600">
              Our team builds your solution using modern technologies, with
              regular updates and feedback sessions.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
            >
              4
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Launch & Support
            </h3>
            <p class="text-gray-600">
              We launch your project and provide ongoing support to ensure
              continued success and growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Approach -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="Our Technology Approach"
          description="We adapt our technology choices to your specific requirements, ensuring the best solution for your project"
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-heroicons-light-bulb"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-3">
              Technology Agnostic
            </h3>
            <p class="text-sm text-gray-600">
              We choose the right technologies based on your project
              requirements, budget, and long-term goals rather than pushing a
              specific stack.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-heroicons-cog-6-tooth"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-3">Modern & Scalable</h3>
            <p class="text-sm text-gray-600">
              We work with modern, proven technologies that ensure your solution
              is fast, secure, and can grow with your business.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-heroicons-wrench-screwdriver"
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-3">Maintainable Code</h3>
            <p class="text-sm text-gray-600">
              We write clean, well-documented code that's easy to maintain and
              extend, regardless of the technology stack chosen.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our expertise spans multiple technologies including React, Vue.js,
            Angular, Node.js, Python, PHP, various databases, cloud platforms,
            and more. We'll recommend the best combination for your specific
            needs.
          </p>
          <UButton
            color="primary"
            variant="outline"
            @click="navigateTo('/contact')"
          >
            Discuss Your Technology Needs
          </UButton>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-20 bg-white max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Service Details"
          description="Comprehensive solutions tailored to your specific needs"
        />

        <div class="space-y-12">
          <!-- Web Design Details -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-2">
              <h3
                class="text-2xl font-semibold text-gray-900 mb-6"
                id="web-design"
              >
                Web Design
              </h3>
              <p class="text-gray-600 mb-6">
                Our design process focuses on creating beautiful, functional
                websites that not only look great but also drive results. We
                combine creativity with data-driven insights to create designs
                that convert.
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      User-Centered Design
                    </h4>
                    <p class="text-gray-600">
                      We prioritize user experience, ensuring your website is
                      intuitive and easy to navigate.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Mobile-First Approach
                    </h4>
                    <p class="text-gray-600">
                      All our designs are mobile-responsive, ensuring your site
                      looks great on any device.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Conversion Optimization
                    </h4>
                    <p class="text-gray-600">
                      We design with conversion in mind, using proven techniques
                      to turn visitors into customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h4 class="font-semibold text-gray-900 mb-4">
                Design Deliverables
              </h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Wireframes and mockups
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Responsive design files
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Style guide and brand assets
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Interactive prototypes
                </li>
              </ul>
            </div>
          </div>

          <!-- Web Development Details -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-2">
              <h3
                class="text-2xl font-semibold text-gray-900 mb-6"
                id="web-development"
              >
                Web Development
              </h3>
              <p class="text-gray-600 mb-6">
                We build fast, scalable websites using the most appropriate
                technologies for your project. Our technology-agnostic approach
                means we choose the right tools for your specific needs,
                ensuring optimal performance and maintainability.
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Technology Agnostic
                    </h4>
                    <p class="text-gray-600">
                      We select the best technologies based on your
                      requirements, budget, and future scalability needs.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Performance Optimized
                    </h4>
                    <p class="text-gray-600">
                      Fast loading times and excellent Core Web Vitals scores
                      regardless of the technology stack.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">SEO Ready</h4>
                    <p class="text-gray-600">
                      Built with search engine optimization best practices in
                      mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg lg:order-1"
            >
              <h4 class="font-semibold text-gray-900 mb-4">
                Development Features
              </h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Server-side rendering
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Content management system
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Contact forms and integrations
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Analytics and tracking
                </li>
              </ul>
            </div>
          </div>

          <!-- Software Development Details -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-2">
              <h3
                class="text-2xl font-semibold text-gray-900 mb-6"
                id="software-solutions"
              >
                Software Development
              </h3>
              <p class="text-gray-600 mb-6">
                We create custom software solutions that streamline your
                business operations, improve efficiency, and provide competitive
                advantages. Our flexible approach allows us to use the most
                suitable technologies for your specific requirements.
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Custom Solutions
                    </h4>
                    <p class="text-gray-600">
                      Tailored software designed specifically for your business
                      needs and workflows, using the right technologies for your
                      use case.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">API Development</h4>
                    <p class="text-gray-600">
                      Robust APIs that integrate with your existing systems and
                      third-party services, built with the most appropriate
                      backend technologies.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Scalable Architecture
                    </h4>
                    <p class="text-gray-600">
                      Built to grow with your business, handling increased load
                      and new features, regardless of the technology stack
                      chosen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h4 class="font-semibold text-gray-900 mb-4">
                Software Solutions
              </h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Web applications
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  RESTful APIs
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Database design
                </li>
                <li class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-blue-600"
                  />
                  Third-party integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToActionSection
      title="Ready to Get Started?"
      description="Let's discuss your project and find the perfect solution for your business"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Our Services - IntegraBlue Web Agency",
  meta: [
    {
      name: "description",
      content:
        "IntegraBlue Web Agency offers comprehensive web design, development, and software solutions for small businesses and startups.",
    },
  ],
});
</script>
