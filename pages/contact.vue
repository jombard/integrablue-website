<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20"
    >
      <div class="ui-container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get In <span class="text-blue-200">Touch</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help your
            business grow online.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20">
      <div class="ui-container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Send us a message
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-4">
                <UFormGroup label="First Name" required>
                  <UInput
                    v-model="form.firstName"
                    placeholder="John"
                    :error="errors.firstName"
                    @blur="validateField('firstName')"
                  />
                </UFormGroup>
                <UFormGroup label="Last Name" required>
                  <UInput
                    v-model="form.lastName"
                    placeholder="Doe"
                    :error="errors.lastName"
                    @blur="validateField('lastName')"
                  />
                </UFormGroup>
              </div>

              <!-- Email -->
              <UFormGroup label="Email Address" required>
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  :error="errors.email"
                  @blur="validateField('email')"
                />
              </UFormGroup>

              <!-- Phone -->
              <UFormGroup label="Phone Number">
                <UInput
                  v-model="form.phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  :error="errors.phone"
                  @blur="validateField('phone')"
                />
              </UFormGroup>

              <!-- Company -->
              <UFormGroup label="Company Name">
                <UInput
                  v-model="form.company"
                  placeholder="Your Company Ltd."
                  :error="errors.company"
                  @blur="validateField('company')"
                />
              </UFormGroup>

              <!-- Project Type -->
              <UFormGroup label="Project Type" required>
                <USelect
                  v-model="form.projectType"
                  :options="projectTypes"
                  placeholder="Select a project type"
                  :error="errors.projectType"
                  @blur="validateField('projectType')"
                />
              </UFormGroup>

              <!-- Budget Range -->
              <UFormGroup label="Budget Range">
                <USelect
                  v-model="form.budget"
                  :options="budgetRanges"
                  placeholder="Select budget range"
                  :error="errors.budget"
                  @blur="validateField('budget')"
                />
              </UFormGroup>

              <!-- Timeline -->
              <UFormGroup label="Timeline">
                <USelect
                  v-model="form.timeline"
                  :options="timelines"
                  placeholder="Select timeline"
                  :error="errors.timeline"
                  @blur="validateField('timeline')"
                />
              </UFormGroup>

              <!-- Message -->
              <UFormGroup label="Project Details" required>
                <UTextarea
                  v-model="form.message"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  :rows="6"
                  :error="errors.message"
                  @blur="validateField('message')"
                />
              </UFormGroup>

              <!-- How did you hear about us -->
              <UFormGroup label="How did you hear about us?">
                <USelect
                  v-model="form.referral"
                  :options="referralSources"
                  placeholder="Select an option"
                  :error="errors.referral"
                  @blur="validateField('referral')"
                />
              </UFormGroup>

              <!-- Submit Button -->
              <UButton
                type="submit"
                color="primary"
                size="lg"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                class="w-full"
              >
                {{ isSubmitting ? "Sending Message..." : "Send Message" }}
              </UButton>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div class="space-y-8">
              <!-- General Contact -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-5 h-5 text-blue-600 mt-1"
                    />
                    <div>
                      <p class="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:hello@integrablue.com"
                        class="text-blue-600 hover:text-blue-800"
                      >
                        hello@integrablue.com
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-phone"
                      class="w-5 h-5 text-blue-600 mt-1"
                    />
                    <div>
                      <p class="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+1234567890"
                        class="text-blue-600 hover:text-blue-800"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-clock"
                      class="w-5 h-5 text-blue-600 mt-1"
                    />
                    <div>
                      <p class="font-medium text-gray-900">Business Hours</p>
                      <p class="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
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
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-600"
                    />
                    <span class="text-gray-700"
                      >We respond within 24 hours</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-600"
                    />
                    <span class="text-gray-700">Free initial consultation</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-600"
                    />
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
                    <UIcon
                      name="i-heroicons-paint-brush"
                      class="w-4 h-4 text-blue-600"
                    />
                    <span class="text-gray-700">Web Design</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-code-bracket"
                      class="w-4 h-4 text-blue-600"
                    />
                    <span class="text-gray-700">Web Development</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-cpu-chip"
                      class="w-4 h-4 text-blue-600"
                    />
                    <span class="text-gray-700">Software Development</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-magnifying-glass"
                      class="w-4 h-4 text-blue-600"
                    />
                    <span class="text-gray-700">SEO & Marketing</span>
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
                  <UButton variant="outline" color="primary">
                    View FAQ
                  </UButton>
                  <UButton color="primary"> Schedule Call </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <UModal v-model="showSuccessModal">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-heroicons-check-circle"
              class="w-6 h-6 text-green-600"
            />
            <h3 class="text-lg font-semibold text-gray-900">
              Message Sent Successfully!
            </h3>
          </div>
        </template>

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
                  class="w-4 h-4 text-blue-600 mt-0.5"
                />
                <span>We'll review your project requirements</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 text-blue-600 mt-0.5"
                />
                <span>Schedule a consultation call to discuss details</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 text-blue-600 mt-0.5"
                />
                <span>Provide a detailed project proposal and timeline</span>
              </li>
            </ul>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton variant="outline" @click="showSuccessModal = false">
              Close
            </UButton>
            <UButton color="primary" @click="goHome"> Back to Home </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
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

// Validation functions
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
  } catch (error) {
    console.error("Form submission error:", error);
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false;
  }
};

// Navigation
const goHome = () => {
  showSuccessModal.value = false;
  navigateTo("/");
};
</script>
