<template>
  <footer class="bg-dark-900/50 border-t border-dark-800 mt-20">
    <div class="container-custom py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
              <span class="text-2xl">🧄</span>
            </div>
            <span class="font-display font-bold text-lg gradient-text">Garlic Model</span>
          </div>
          <p class="text-gray-400 text-sm mb-4 max-w-md">
            {{ t('footer.disclaimer') }}
          </p>
          <p class="text-gray-500 text-xs">
            {{ t('footer.rights') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {{ t(link.label) }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-semibold text-white mb-4">Resources</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="https://openai.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center space-x-1"
              >
                <span>OpenAI Official</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/OpenAI/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center space-x-1"
              >
                <span>Reddit Community</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                Disclaimer
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Disclaimer Banner -->
      <div class="border-t border-dark-800 pt-8">
        <div class="bg-dark-800/50 rounded-lg p-4 mb-6">
          <p class="text-yellow-400/80 text-xs flex items-start space-x-2">
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>
              <strong>Important:</strong> This is an unofficial, third-party information website. We are not affiliated with OpenAI. 
              All information about the "Garlic" model is unconfirmed and based on public reports and speculation.
            </span>
          </p>
        </div>

        <div class="text-center text-gray-500 text-sm">
          <p>© {{ currentYear }} Garlic Model Info. Created for informational purposes.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quickLinks = [
  { path: '/', label: 'nav.home' },
  { path: '/reports', label: 'nav.reports' },
  { path: '/tech-analysis', label: 'nav.techAnalysis' },
  { path: '/comparison', label: 'nav.comparison' },
  { path: '/faq', label: 'nav.faq' },
  { path: '/about', label: 'nav.about' },
]

const currentYear = computed(() => new Date().getFullYear())
</script>
