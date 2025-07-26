<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="ui-container mx-auto px-4 max-w-7xl">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">IntegraBlue Web Agency</h3>
          <p class="text-gray-300 mb-6 max-w-md">
            Modern web solutions for small businesses and startups. We build
            fast, beautiful, and scalable websites that help you succeed online.
          </p>
          <div class="flex space-x-4">
            <UButton
              variant="ghost"
              color="neutral"
              icon="i-simple-icons-twitter"
            />
            <UButton
              variant="ghost"
              color="neutral"
              icon="i-simple-icons-linkedin"
            />
            <UButton
              variant="ghost"
              color="neutral"
              icon="i-simple-icons-github"
            />
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-300">
            <li>
              <a
                href="/services#web-design"
                class="hover:text-white transition-colors"
                >Web Design</a
              >
            </li>
            <li>
              <a
                href="/services#web-development"
                class="hover:text-white transition-colors"
                >Web Development</a
              >
            </li>
            <li>
              <a
                href="/services#software-solutions"
                class="hover:text-white transition-colors"
                >Software Development</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4 mr-2" />
              <a href="mailto:hello@integrablue.com">hello@integrablue.com</a>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-2" />
              London, UK
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p>&copy; 2025 IntegraBlue Web Agency Limited. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
