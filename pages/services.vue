<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32"
    >
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span class="text-blue-200">Services</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business grow and
            succeed online
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial concept to ongoing support, we handle every aspect of
            your digital presence
          </p>
        </div>

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
            <UButton color="primary" variant="solid" class="w-full">
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
              Fast, responsive websites built with modern technologies that
              scale with your business.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-600" />
                Modern tech stack (Nuxt 3, Vue.js)
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
            <UButton color="primary" variant="solid" class="w-full">
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
            <UButton color="primary" variant="solid" class="w-full">
              Learn More
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process/Workflow -->
    <section class="py-20 bg-white">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time
            and exceeds expectations
          </p>
        </div>

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

    <!-- Technology Stack Showcase -->
    <section class="py-20 bg-gray-50">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and
            maintainable solutions
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-nuxtdotjs"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Nuxt 3</h3>
            <p class="text-sm text-gray-600">
              Modern Vue.js framework for server-side rendering and static site
              generation
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-vuedotjs"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Vue.js</h3>
            <p class="text-sm text-gray-600">
              Progressive JavaScript framework for building user interfaces
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-tailwindcss"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
            <p class="text-sm text-gray-600">
              Utility-first CSS framework for rapid UI development
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-typescript"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">TypeScript</h3>
            <p class="text-sm text-gray-600">
              Typed JavaScript for better development experience and code
              quality
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-nodejs"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Node.js</h3>
            <p class="text-sm text-gray-600">
              JavaScript runtime for server-side development and APIs
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-postgresql"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">PostgreSQL</h3>
            <p class="text-sm text-gray-600">
              Advanced open-source relational database
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-docker"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Docker</h3>
            <p class="text-sm text-gray-600">
              Containerization platform for consistent deployments
            </p>
          </div>

          <div class="bg-white p-5 rounded-lg shadow-lg text-center">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-simple-icons-github"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">GitHub</h3>
            <p class="text-sm text-gray-600">
              Version control and collaboration platform
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-20 bg-white">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Details
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your specific needs
          </p>
        </div>

        <div class="space-y-12">
          <!-- Web Design Details -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-2">
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">
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
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">
                Web Development
              </h3>
              <p class="text-gray-600 mb-6">
                We build fast, scalable websites using modern technologies and
                best practices. Our development process ensures your site is not
                only beautiful but also performant and maintainable.
              </p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-blue-600 mt-1"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      Modern Architecture
                    </h4>
                    <p class="text-gray-600">
                      Built with scalable, maintainable code that grows with
                      your business.
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
                      Fast loading times and excellent Core Web Vitals scores.
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
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">
                Software Development
              </h3>
              <p class="text-gray-600 mb-6">
                We create custom software solutions that streamline your
                business operations, improve efficiency, and provide competitive
                advantages. From web applications to APIs, we build solutions
                that scale.
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
                      needs and workflows.
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
                      third-party services.
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
                      and new features.
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
    <section class="py-20 bg-blue-900 text-white">
      <div class="ui-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and find the perfect solution for your
          business
        </p>
        <div class="flex sm:flex-row gap-4 justify-center">
          <UButton
            size="lg"
            color="primary"
            variant="solid"
            class="font-semibold"
          >
            Start Your Project
          </UButton>
          <UButton
            size="lg"
            variant="outline"
            class="border-white text-white hover:bg-white hover:text-blue-900"
          >
            Schedule a Consultation
          </UButton>
        </div>
      </div>
    </section>
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
