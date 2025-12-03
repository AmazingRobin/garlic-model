<template>
  <div class="min-h-screen py-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-heading">{{ t('reports.title') }}</h1>
        <p class="text-gray-400 text-lg">{{ t('reports.subtitle') }}</p>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="selectedCategory = category.value"
          class="px-6 py-2 rounded-lg font-medium transition-all duration-200"
          :class="selectedCategory === category.value
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
            : 'bg-dark-800 text-gray-300 hover:bg-dark-700'"
        >
          {{ category.label }}
          <span class="ml-2 px-2 py-0.5 bg-dark-900/50 rounded-full text-xs">
            {{ getCategoryCount(category.value) }}
          </span>
        </button>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="card-glow group"
        >
          <!-- Category Badge -->
          <div class="mb-4">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium"
              :class="{
                'bg-yellow-500/20 text-yellow-300': report.category === 'rumor',
                'bg-blue-500/20 text-blue-300': report.category === 'media',
                'bg-purple-500/20 text-purple-300': report.category === 'speculation'
              }"
            >
              {{ t(`reports.filter.${report.category}`) }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="font-display font-semibold text-lg text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors duration-200">
            {{ report.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-gray-400 text-sm mb-4 line-clamp-3">
            {{ report.excerpt }}
          </p>

          <!-- Meta Info -->
          <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
            <span class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatDate(report.date) }}</span>
            </span>
            <span class="font-medium text-primary-400">{{ report.source }}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in report.tags"
              :key="tag"
              class="px-2 py-1 bg-dark-800 text-gray-400 rounded text-xs"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Link -->
          <a
            :href="report.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-200"
          >
            <span>{{ t('reports.readMore') }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredReports.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">📰</div>
        <p class="text-gray-400 text-lg">No reports found in this category.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { reports } from '@/data/reports'
import { updateMetaTags } from '@/utils/seo'

const { t } = useI18n()

const selectedCategory = ref<string>('all')

const categories = [
  { value: 'all', label: t('reports.filter.all') },
  { value: 'rumor', label: t('reports.filter.rumor') },
  { value: 'media', label: t('reports.filter.media') },
  { value: 'speculation', label: t('reports.filter.speculation') },
]

const filteredReports = computed(() => {
  if (selectedCategory.value === 'all') {
    return reports
  }
  return reports.filter(r => r.category === selectedCategory.value)
})

const getCategoryCount = (category: string) => {
  if (category === 'all') return reports.length
  return reports.filter(r => r.category === category).length
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

onMounted(() => {
  updateMetaTags({
    title: 'Media Reports - Garlic Model | OpenAI Rumors & News',
    description: 'Comprehensive collection of media reports and news coverage about OpenAI\'s rumored Garlic model from various sources.',
    url: 'https://garlic-model.com/reports',
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
