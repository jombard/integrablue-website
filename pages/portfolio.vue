<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection
      title-white="Our"
      title-blue="Portfolio"
      description="Discover how we've helped businesses transform their digital presence with modern, effective web solutions."
    />

    <!-- Filter Section -->
    <section class="py-12 bg-gray-50">
      <div class="ui-container mx-auto px-4 max-w-7xl">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <UButton
            v-for="category in categories"
            :key="category"
            :variant="selectedCategory === category ? 'solid' : 'outline'"
            :color="selectedCategory === category ? 'primary' : 'neutral'"
            @click="selectedCategory = category"
            class="capitalize"
          >
            {{ category }}
          </UButton>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20 max-w-7xl mx-auto">
      <div class="ui-container mx-auto px-4">
        <TransitionGroup
          name="project-grid"
          tag="div"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            @click="openProjectModal(project)"
          >
            <div
              class="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
            >
              <UIcon :name="project.icon" class="w-16 h-16 text-blue-600" />
              <div class="absolute top-4 right-4">
                <UBadge
                  :color="getCategoryColor(project.category)"
                  variant="solid"
                >
                  {{ project.category }}
                </UBadge>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <UBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  color="neutral"
                  variant="soft"
                  size="sm"
                >
                  {{ tech }}
                </UBadge>
                <UBadge
                  v-if="project.technologies.length > 3"
                  color="neutral"
                  variant="soft"
                  size="sm"
                >
                  +{{ project.technologies.length - 3 }}
                </UBadge>
              </div>
              <UButton variant="link" color="primary" class="p-0">
                View Details →
              </UButton>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <CallToActionSection
      title="Ready to Work Together?"
      description="Let's discuss how IntegraBlue can help your business succeed online"
    />

    <!-- Project Modal -->
    <UModal v-model:open="isModalOpen" :title="selectedProject?.title">
      <template #body>
        <div v-if="selectedProject" class="w-full max-w-4xl">
          <div class="space-y-6">
            <!-- Project Image -->
            <div
              class="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center"
            >
              <UIcon
                :name="selectedProject.icon"
                class="w-20 h-20 text-blue-600"
              />
            </div>

            <!-- Project Info -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">
                  Project Overview
                </h4>
                <p class="text-gray-600 mb-4">
                  {{ selectedProject.description }}
                </p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-calendar"
                      class="w-4 h-4 text-gray-500"
                    />
                    <span class="text-sm text-gray-600"
                      >Completed: {{ selectedProject.completed }}</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-clock"
                      class="w-4 h-4 text-gray-500"
                    />
                    <span class="text-sm text-gray-600"
                      >Duration: {{ selectedProject.duration }}</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-user-group"
                      class="w-4 h-4 text-gray-500"
                    />
                    <span class="text-sm text-gray-600"
                      >Team: {{ selectedProject.team }}</span
                    >
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div class="flex flex-wrap gap-2 mb-4">
                  <UBadge
                    v-for="tech in selectedProject.technologies"
                    :key="tech"
                    color="primary"
                    variant="soft"
                  >
                    {{ tech }}
                  </UBadge>
                </div>

                <h4 class="text-lg font-semibold text-gray-900 mb-3">
                  Key Features
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in selectedProject.features"
                    :key="feature"
                    class="flex items-start gap-2"
                  >
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-4 h-4 text-green-500 mt-0.5"
                    />
                    <span class="text-sm text-gray-600">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Case Study -->
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">
                Case Study
              </h4>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-semibold text-gray-900 mb-2">Challenge</h5>
                <p class="text-gray-600 mb-4">
                  {{ selectedProject.challenge }}
                </p>

                <h5 class="font-semibold text-gray-900 mb-2">Solution</h5>
                <p class="text-gray-600 mb-4">{{ selectedProject.solution }}</p>

                <h5 class="font-semibold text-gray-900 mb-2">Results</h5>
                <p class="text-gray-600">{{ selectedProject.results }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-between gap-3">
          <UButton color="primary" @click="contactUs">
            Start Similar Project
          </UButton>
          <UButton variant="outline" @click="closeProjectModal">
            Close
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Portfolio - IntegraBlue Web Agency",
  description:
    "Explore our portfolio of successful web projects and case studies. See how we help businesses grow with modern web solutions.",
});

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  technologies: string[];
  completed: string;
  duration: string;
  team: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string;
}

// Portfolio data
const projects = ref<Project[]>([
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced inventory management and payment processing.",
    category: "web development",
    icon: "i-heroicons-shopping-cart",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    completed: "March 2024",
    duration: "8 weeks",
    team: "3 developers",
    features: [
      "Responsive design for all devices",
      "Advanced product filtering and search",
      "Secure payment processing",
      "Real-time inventory management",
      "Admin dashboard with analytics",
    ],
    challenge:
      "The client needed a scalable e-commerce platform that could handle high traffic and complex inventory management while providing an excellent user experience.",
    solution:
      "We built a modern, responsive e-commerce platform using Vue.js for the frontend and Node.js for the backend. Implemented advanced search and filtering capabilities, secure payment processing with Stripe, and a comprehensive admin dashboard.",
    results:
      "The platform launched successfully with 40% faster page load times than competitors. Sales increased by 25% in the first quarter, and the client reported 95% customer satisfaction with the new shopping experience.",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    description:
      "Complete redesign of a corporate website with improved user experience and lead generation.",
    category: "web design",
    icon: "i-heroicons-building-office",
    technologies: ["Nuxt.js", "Tailwind CSS", "Netlify", "Google Analytics"],
    completed: "February 2024",
    duration: "6 weeks",
    team: "2 designers, 1 developer",
    features: [
      "Modern, responsive design",
      "Improved navigation and user flow",
      "Lead capture forms",
      "SEO optimization",
      "Performance optimization",
    ],
    challenge:
      "The existing corporate website was outdated, slow, and not generating enough leads. The client needed a modern, fast website that would improve their online presence and convert more visitors.",
    solution:
      "We redesigned the entire website with a modern, clean aesthetic using Nuxt.js and Tailwind CSS. Implemented strategic lead capture forms, improved SEO, and optimized performance for better user experience.",
    results:
      "The new website loads 60% faster and has improved conversion rates by 35%. Organic traffic increased by 40%, and the client saw a 50% increase in qualified leads within the first month.",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "A comprehensive SaaS dashboard with real-time analytics and user management.",
    category: "software development",
    icon: "i-heroicons-chart-bar",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Chart.js",
      "Material-UI",
    ],
    completed: "January 2024",
    duration: "10 weeks",
    team: "4 developers",
    features: [
      "Real-time data visualization",
      "User role management",
      "Advanced reporting tools",
      "API integration",
      "Mobile-responsive design",
    ],
    challenge:
      "The client needed a comprehensive SaaS dashboard that could handle complex data visualization, user management, and real-time updates for their growing user base.",
    solution:
      "We developed a robust SaaS dashboard using React and TypeScript for type safety. Integrated Firebase for real-time data, implemented advanced charting with Chart.js, and created a scalable user management system.",
    results:
      "The dashboard successfully handles 10,000+ active users with 99.9% uptime. User engagement increased by 45%, and the client reported significant time savings in data analysis and reporting.",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description:
      "A beautiful, mobile-first website for a local restaurant with online ordering.",
    category: "web design",
    icon: "i-heroicons-home-modern",
    technologies: ["Vue.js", "Vuetify", "Firebase", "Google Maps API"],
    completed: "December 2023",
    duration: "4 weeks",
    team: "1 designer, 1 developer",
    features: [
      "Mobile-first responsive design",
      "Online menu with photos",
      "Reservation system",
      "Location integration",
      "Social media integration",
    ],
    challenge:
      "A local restaurant needed a modern website that would showcase their menu, allow online reservations, and work perfectly on mobile devices to attract local customers.",
    solution:
      "We created a beautiful, mobile-first website using Vue.js and Vuetify. Integrated an online reservation system, Google Maps for location, and social media feeds to create an engaging local business presence.",
    results:
      "The website increased online reservations by 80% and improved local search visibility. Mobile traffic accounts for 70% of visitors, and the client reported increased foot traffic from online discovery.",
  },
  {
    id: 5,
    title: "Educational Platform",
    description:
      "An online learning platform with course management and student progress tracking.",
    category: "software development",
    icon: "i-heroicons-academic-cap",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS S3", "Redis"],
    completed: "November 2023",
    duration: "12 weeks",
    team: "5 developers",
    features: [
      "Course creation and management",
      "Video streaming and progress tracking",
      "Student assessment tools",
      "Payment processing",
      "Analytics and reporting",
    ],
    challenge:
      "An educational institution needed a comprehensive online learning platform that could handle video streaming, course management, student progress tracking, and secure payment processing.",
    solution:
      "We built a scalable educational platform using Next.js and PostgreSQL. Implemented video streaming with progress tracking, comprehensive course management tools, and integrated Stripe for secure payments.",
    results:
      "The platform successfully supports 5,000+ students with 98% satisfaction rate. Course completion rates increased by 30%, and the institution expanded their online offerings by 200%.",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website for a creative professional with project showcase.",
    category: "web design",
    icon: "i-heroicons-photo",
    technologies: ["Nuxt.js", "Tailwind CSS", "Framer Motion", "Netlify"],
    completed: "October 2023",
    duration: "3 weeks",
    team: "1 designer, 1 developer",
    features: [
      "Animated project showcases",
      "Contact form integration",
      "Blog functionality",
      "SEO optimization",
      "Fast loading times",
    ],
    challenge:
      "A creative professional needed a stunning portfolio website that would showcase their work effectively, attract new clients, and rank well in search engines.",
    solution:
      "We designed a beautiful, animated portfolio using Nuxt.js and Tailwind CSS. Implemented smooth animations with Framer Motion, created an effective project showcase, and optimized for SEO and performance.",
    results:
      "The portfolio website increased client inquiries by 150% and improved search engine rankings. The client secured 3 major projects within the first month of launch.",
  },
]);

const categories = [
  "all",
  "web design",
  "web development",
  "software development",
];
const selectedCategory = ref("all");
const selectedProject = ref<Project | null>(null);
const isModalOpen = ref(false);

// Computed properties
const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category === selectedCategory.value
  );
});

// Methods
const getCategoryColor = (
  category: string
): "primary" | "success" | "secondary" | "neutral" => {
  const colors = {
    "web design": "primary" as const,
    "web development": "success" as const,
    "software development": "secondary" as const,
  };
  return colors[category as keyof typeof colors] || "neutral";
};

const contactUs = () => {
  navigateTo("/contact");
};

const openProjectModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeProjectModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

// Watch for route changes to close modal
watch(
  () => useRoute().path,
  () => {
    if (isModalOpen.value) {
      closeProjectModal();
    }
  }
);
</script>

<style scoped>
/* Project grid transition animations */
.project-grid-move,
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.5s ease;
}

.project-grid-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}

.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-30px);
}

.project-grid-leave-active {
  position: absolute;
}

/* Ensure grid maintains layout during transitions */
.project-grid {
  position: relative;
}

.project-grid > * {
  transition: all 0.5s ease;
}
</style>
