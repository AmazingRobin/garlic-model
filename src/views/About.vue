<template>
  <div class="min-h-screen py-16">
    <div class="container-custom max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-block w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center glow-effect mb-6">
          <span class="text-5xl">🧄</span>
        </div>
        <h1 class="section-heading">{{ t('about.title') }}</h1>
        <p class="text-gray-400 text-lg">{{ t('about.subtitle') }}</p>
      </div>

      <!-- Disclaimer -->
      <div class="card bg-red-500/5 border-red-500/20 mb-8">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 class="font-display font-bold text-xl text-red-300 mb-3">
              {{ t('about.disclaimer.title') }}
            </h2>
            <p class="text-gray-300 leading-relaxed">
              {{ t('about.disclaimer.content') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="space-y-8">
        <!-- Purpose -->
        <div class="card">
          <h2 class="font-display font-bold text-2xl text-white mb-4 flex items-center space-x-2">
            <span class="text-3xl">🎯</span>
            <span>{{ t('about.purpose.title') }}</span>
          </h2>
          <p class="text-gray-400 leading-relaxed">
            {{ t('about.purpose.content') }}
          </p>
        </div>

        <!-- Sources -->
        <div class="card">
          <h2 class="font-display font-bold text-2xl text-white mb-4 flex items-center space-x-2">
            <span class="text-3xl">📚</span>
            <span>{{ t('about.sources.title') }}</span>
          </h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            {{ t('about.sources.content') }}
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <a
              v-for="source in sources"
              :key="source.name"
              :href="source.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center px-4 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors duration-200 text-sm text-gray-300"
            >
              {{ source.name }}
            </a>
          </div>
        </div>

        <!-- What We Are -->
        <div class="card bg-primary-500/5 border-primary-500/20">
          <h2 class="font-display font-bold text-2xl text-white mb-4 flex items-center space-x-2">
            <span class="text-3xl">✅</span>
            <span>What This Site Is</span>
          </h2>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>An independent information aggregator</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>A chronological tracker of media reports</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>A resource for understanding public speculation</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>A clearly labeled unofficial resource</span>
            </li>
          </ul>
        </div>

        <!-- What We Are NOT -->
        <div class="card bg-yellow-500/5 border-yellow-500/20">
          <h2 class="font-display font-bold text-2xl text-white mb-4 flex items-center space-x-2">
            <span class="text-3xl">❌</span>
            <span>What This Site Is NOT</span>
          </h2>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>Affiliated with or endorsed by OpenAI</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>A source of official information</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>Making any guarantees about model existence or capabilities</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>Providing investment or business advice</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="card">
          <h2 class="font-display font-bold text-2xl text-white mb-4 flex items-center space-x-2">
            <span class="text-3xl">📧</span>
            <span>{{ t('about.contact.title') }}</span>
          </h2>
          <p class="text-gray-400 leading-relaxed">
            {{ t('about.contact.content') }}
          </p>
        </div>

        <!-- Last Updated -->
        <div class="text-center text-gray-500 text-sm">
          <p>Last updated: December 3, 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { updateMetaTags } from '@/utils/seo'

const { t } = useI18n()

const sources = [
  { name: 'Reddit', url: 'https://www.reddit.com/r/OpenAI/' },
  { name: 'The Information', url: 'https://www.theinformation.com' },
  { name: 'TechCrunch', url: 'https://techcrunch.com' },
  { name: 'VentureBeat', url: 'https://venturebeat.com' },
  { name: 'Indian Express', url: 'https://indianexpress.com' },
  { name: 'Seeking Alpha', url: 'https://seekingalpha.com' },
]

onMounted(() => {
  updateMetaTags({
    title: 'About - Disclaimer & Information | Garlic Model Info',
    description: 'About this independent information site. Important disclaimers and information about our sources and purpose.',
    url: 'https://garlic-model.com/about',
  })
})
</script>
