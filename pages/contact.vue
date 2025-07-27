<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection
      title-white="Get In"
      title-blue="Touch"
      description="Ready to start your next project? Let's discuss how we can help your business grow online."
    />

    <!-- Contact Content -->
    <section class="py-20 max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <SectionHeader
              title="Send us a message"
              description="Drop us a message to get started with your project"
            />

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-500 mb-2">
                    First Name*
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="John"
                    :class="[
                      'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.firstName
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300  placeholder-gray-400',
                    ]"
                    @blur="validateField('firstName')"
                  />
                  <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
                    {{ errors.firstName }}
                  </p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500 mb-2">
                    Last Name*
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Doe"
                    :class="[
                      'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.lastName
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300  placeholder-gray-400',
                    ]"
                    @blur="validateField('lastName')"
                  />
                  <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                    {{ errors.lastName }}
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Email Address*
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                    errors.email
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300  placeholder-gray-400',
                  ]"
                  @blur="validateField('email')"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                    errors.phone
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300  placeholder-gray-400',
                  ]"
                  @blur="validateField('phone')"
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Company -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Company Name
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Your Company Ltd."
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
                    errors.company
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300  placeholder-gray-400',
                  ]"
                  @blur="validateField('company')"
                />
                <p v-if="errors.company" class="mt-1 text-sm text-red-600">
                  {{ errors.company }}
                </p>
              </div>

              <!-- Project Type -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Project Type*
                </label>
                <select
                  v-model="form.projectType"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-no-repeat bg-right pr-10 text-gray-500',
                    errors.projectType
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 ',
                  ]"
                  style="
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E');
                  "
                  @blur="validateField('projectType')"
                >
                  <option value="" disabled>Select a project type</option>
                  <option
                    v-for="option in projectTypes"
                    :key="option.value"
                    :value="option.value"
                    class=""
                  >
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="errors.projectType" class="mt-1 text-sm text-red-600">
                  {{ errors.projectType }}
                </p>
              </div>

              <!-- Budget Range -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Budget Range
                </label>
                <select
                  v-model="form.budget"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-no-repeat bg-right pr-10 text-gray-500',
                    errors.budget
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 ',
                  ]"
                  style="
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E');
                  "
                  @blur="validateField('budget')"
                >
                  <option value="" disabled>Select budget range</option>
                  <option
                    v-for="option in budgetRanges"
                    :key="option.value"
                    :value="option.value"
                    class=""
                  >
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="errors.budget" class="mt-1 text-sm text-red-600">
                  {{ errors.budget }}
                </p>
              </div>

              <!-- Timeline -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Timeline
                </label>
                <select
                  v-model="form.timeline"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-no-repeat bg-right pr-10 text-gray-500',
                    errors.timeline
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 ',
                  ]"
                  style="
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E');
                  "
                  @blur="validateField('timeline')"
                >
                  <option value="" disabled>Select timeline</option>
                  <option
                    v-for="option in timelines"
                    :key="option.value"
                    :value="option.value"
                    class=""
                  >
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="errors.timeline" class="mt-1 text-sm text-red-600">
                  {{ errors.timeline }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  Project Details*
                </label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-500',
                    errors.message
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300  placeholder-gray-400',
                  ]"
                  @blur="validateField('message')"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">
                  {{ errors.message }}
                </p>
              </div>

              <!-- How did you hear about us -->
              <div>
                <label class="block text-sm font-medium text-gray-500 mb-2">
                  How did you hear about us?
                </label>
                <select
                  v-model="form.referral"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-no-repeat bg-right pr-10 text-gray-500',
                    errors.referral
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 ',
                  ]"
                  style="
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E');
                  "
                  @blur="validateField('referral')"
                >
                  <option value="" disabled>Select an option</option>
                  <option
                    v-for="option in referralSources"
                    :key="option.value"
                    :value="option.value"
                    class=""
                  >
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="errors.referral" class="mt-1 text-sm text-red-600">
                  {{ errors.referral }}
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-blue-700 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <svg
                    class="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                {{ isSubmitting ? "Sending Message..." : "Send Message" }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <SectionHeader
              title="Contact Information"
              description="Get in touch with us to discuss your project or ask us a question"
            />

            <div class="space-y-8">
              <!-- General Contact -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <svg
                      class="w-5 h-5 text-blue-700 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                    <div>
                      <p class="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:hello@integrablue.com"
                        class="text-blue-700 hover:text-blue-800"
                      >
                        hello@integrablue.com
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg
                      class="w-5 h-5 text-blue-700 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div>
                      <p class="font-medium text-gray-900">Business Hours</p>
                      <p class="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM UTC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Response Time -->
              <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  Response Time
                </h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700"
                      >We respond within 24 hours</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">Free initial consultation</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">Detailed project proposal</span>
                  </div>
                </div>
              </div>

              <!-- Services -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  Our Services
                </h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-4 h-4 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                    <span class="text-gray-700">Web Design</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-4 h-4 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">Web Development</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-4 h-4 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">Software Development</span>
                  </div>
                </div>
              </div>

              <!-- FAQ Link -->
              <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  Have Questions?
                </h3>
                <p class="text-gray-600 mb-4">
                  Check out our frequently asked questions or schedule a call to
                  discuss your project in detail.
                </p>
                <div class="flex gap-3">
                  <button
                    class="px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    View FAQ
                  </button>
                  <button
                    class="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <div class="flex items-center gap-3 mb-4">
          <UIcon
            name="i-heroicons-check-circle"
            class="w-6 h-6 text-green-600"
          />
          <h3 class="text-lg font-semibold text-gray-900">
            Message Sent Successfully!
          </h3>
        </div>

        <div class="space-y-4">
          <p class="text-gray-600">
            Thank you for reaching out to IntegraBlue! We've received your
            message and will get back to you within 24 hours.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">What happens next?</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 text-blue-700 mt-0.5"
                />
                <span>We'll review your project requirements</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 text-blue-700 mt-0.5"
                />
                <span>Schedule a consultation call to discuss details</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 text-blue-700 mt-0.5"
                />
                <span>Provide a detailed project proposal and timeline</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <UButton variant="outline" @click="showSuccessModal = false">
            Close
          </UButton>
          <UButton color="primary" @click="goHome"> Back to Home </UButton>
        </div>
      </div>
    </div>

    <!-- Error Modal -->
    <ErrorMessage
      :show="showErrorModal"
      :title="errorTitle"
      :message="errorMessage"
      :retry="retrySubmission"
      @close="showErrorModal = false"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Contact Us - IntegraBlue Web Agency",
  description:
    "Get in touch with IntegraBlue Web Agency. We help small businesses and startups build modern, effective websites. Contact us for a free consultation.",
});

// Form data
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  referral: "",
});

// Form validation errors
const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  referral: "",
});

// Form state
const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
const errorTitle = ref("");
const errorMessage = ref("");

// Ensure modals are hidden on page load
onMounted(() => {
  showSuccessModal.value = false;
  showErrorModal.value = false;
});

// Form options
const projectTypes = [
  { label: "Web Design", value: "web-design" },
  { label: "Web Development", value: "web-development" },
  { label: "Software Development", value: "software-development" },
  { label: "E-commerce Website", value: "ecommerce" },
  { label: "Website Redesign", value: "redesign" },
  { label: "SEO & Marketing", value: "seo-marketing" },
  { label: "Other", value: "other" },
];

const budgetRanges = [
  { label: "Under $5,000", value: "under-5k" },
  { label: "$5,000 - $10,000", value: "5k-10k" },
  { label: "$10,000 - $25,000", value: "10k-25k" },
  { label: "$25,000 - $50,000", value: "25k-50k" },
  { label: "$50,000+", value: "50k-plus" },
  { label: "Not sure yet", value: "not-sure" },
];

const timelines = [
  { label: "ASAP", value: "asap" },
  { label: "1-2 months", value: "1-2-months" },
  { label: "3-6 months", value: "3-6-months" },
  { label: "6+ months", value: "6-plus-months" },
  { label: "Not sure yet", value: "not-sure" },
];

const referralSources = [
  { label: "Google Search", value: "google" },
  { label: "Social Media", value: "social-media" },
  { label: "Referral", value: "referral" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Advertisement", value: "advertisement" },
  { label: "Other", value: "other" },
];

// Simple client-side validation
const validateField = (field: string) => {
  errors.value[field as keyof typeof errors.value] = "";

  switch (field) {
    case "firstName":
      if (!form.value.firstName.trim()) {
        errors.value.firstName = "First name is required";
      }
      break;
    case "lastName":
      if (!form.value.lastName.trim()) {
        errors.value.lastName = "Last name is required";
      }
      break;
    case "email":
      if (!form.value.email.trim()) {
        errors.value.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = "Please enter a valid email address";
      }
      break;
    case "phone":
      if (
        form.value.phone &&
        !/^[\+]?[1-9][\d]{0,15}$/.test(form.value.phone.replace(/\s/g, ""))
      ) {
        errors.value.phone = "Please enter a valid phone number";
      }
      break;
    case "projectType":
      if (!form.value.projectType) {
        errors.value.projectType = "Please select a project type";
      }
      break;
    case "message":
      if (!form.value.message.trim()) {
        errors.value.message = "Project details are required";
      } else if (form.value.message.trim().length < 20) {
        errors.value.message =
          "Please provide more details about your project (at least 20 characters)";
      }
      break;
  }
};

const validateForm = () => {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "projectType",
    "message",
  ];
  let isValid = true;

  requiredFields.forEach((field) => {
    validateField(field);
    if (errors.value[field as keyof typeof errors.value]) {
      isValid = false;
    }
  });

  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // For GitHub Pages, we'll use Formspree
    const formData = new FormData();

    // Add all form fields to FormData
    Object.entries(form.value).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    // Get form endpoint from runtime config
    const config = useRuntimeConfig();
    const formEndpoint = config.public.formEndpoint;

    // Send to Formspree
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    // Reset form
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      referral: "",
    };

    // Show success modal
    showSuccessModal.value = true;
  } catch (error: any) {
    console.error("Form submission error:", error);

    // Handle different types of errors
    if (error.statusCode === 400) {
      // Validation error
      errorTitle.value = "Validation Error";
      errorMessage.value =
        error.statusMessage || "Please check your form and try again.";
    } else {
      // Server error
      errorTitle.value = "Submission Error";
      errorMessage.value =
        "Sorry, there was an error sending your message. Please try again later or contact us directly.";
    }
    showErrorModal.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Retry submission
const retrySubmission = () => {
  showErrorModal.value = false;
  submitForm();
};

// Navigation
const goHome = () => {
  showSuccessModal.value = false;
  navigateTo("/");
};
</script>
