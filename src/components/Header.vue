<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { locales } from '@/data/locales'
import { loadLocaleMessages } from '@/locales'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const navLinks = [
  { path: '#home', label: 'nav.home' },
  { path: '#reports', label: 'nav.reports' },
  { path: '#tech-analysis', label: 'nav.techAnalysis' },
  { path: '#comparison', label: 'nav.comparison' },
  { path: '#faq', label: 'nav.faq' },
  { path: '#about', label: 'nav.about' },
]

const isMobileMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)
const langDropdown = ref<HTMLElement | null>(null)

const currentLocale = computed(() => {
  return locales.find(l => l.code === locale.value) || locales[0]
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isLangDropdownOpen.value = false
  }
}

const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
  if (isLangDropdownOpen.value) {
    isMobileMenuOpen.value = false
  }
}

const changeLocale = async (code: string) => {
  await loadLocaleMessages(code as any)
  locale.value = code
  isLangDropdownOpen.value = false
}

const handleNavClick = (path: string) => {
  // Close mobile menu
  isMobileMenuOpen.value = false
  
  // Extract hash
  const hash = path
  
  // If we are already on home page, just scroll
  if (route.path === '/') {
    const element = document.querySelector(hash)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Update URL hash without jumping
      history.pushState(null, '', hash)
    }
  } else {
    // If on another page (shouldn't happen in SPA but good for safety), go to home with hash
    router.push({ path: '/', hash: hash })
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (langDropdown.value && !langDropdown.value.contains(event.target as Node)) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800">
    <nav class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#home" @click.prevent="handleNavClick('#home')" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center glow-effect-hover transition-all duration-300 group-hover:scale-110">
            <span class="text-2xl">🧄</span>
          </div>
          <div class="flex flex-col">
            <span class="font-display font-bold text-lg gradient-text">Garlic Model</span>
            <span class="text-xs text-gray-500">Unofficial Info Hub</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-for="link in navLinks"
            :key="link.path"
            :href="link.path"
            @click.prevent="handleNavClick(link.path)"
            class="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all duration-200 cursor-pointer"
          >
            {{ t(link.label) }}
          </a>
        </div>

        <!-- Language Selector & Mobile Menu -->
        <div class="flex items-center space-x-3">
          <!-- Language Dropdown -->
          <div class="relative" ref="langDropdown">
            <button
              @click="toggleLangDropdown"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-200 border border-dark-700"
            >
              <span class="text-xl">{{ currentLocale?.flag }}</span>
              <span class="hidden sm:inline text-sm">{{ currentLocale?.name }}</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': isLangDropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <transition name="slide-down">
              <div
                v-if="isLangDropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-dark-900 border border-dark-700 rounded-lg shadow-xl py-2 animate-slide-down"
              >
                <button
                  v-for="locale in locales"
                  :key="locale.code"
                  @click="changeLocale(locale.code)"
                  class="w-full px-4 py-2 text-left hover:bg-dark-800 transition-colors duration-150 flex items-center space-x-3"
                  :class="{ 'bg-dark-800': currentLocale?.code === locale.code }"
                >
                  <span class="text-xl">{{ locale.flag }}</span>
                  <span class="text-sm">{{ locale.name }}</span>
                </button>
              </div>
            </transition>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-2 animate-slide-down">
          <a
            v-for="link in navLinks"
            :key="link.path"
            :href="link.path"
            @click.prevent="handleNavClick(link.path)"
            class="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all duration-200 cursor-pointer"
          >
            {{ t(link.label) }}
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
