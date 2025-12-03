<template>
  <div class="py-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('reports.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('reports.subtitle') }}</p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
          :class="activeFilter === filter.value 
            ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/25' 
            : 'bg-dark-800 text-gray-400 border-dark-700 hover:border-gray-600'"
        >
          {{ t(`reports.filter.${filter.label}`) }}
        </button>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="card group hover:border-primary-500/30 transition-all duration-300"
        >
          <!-- Category Badge -->
          <div class="mb-4">
            <span
              class="px-2 py-1 text-xs rounded-full border"
              :class="{
                'bg-yellow-500/10 text-yellow-300 border-yellow-500/20': report.category === 'rumor',
                'bg-blue-500/10 text-blue-300 border-blue-500/20': report.category === 'media',
                'bg-purple-500/10 text-purple-300 border-purple-500/20': report.category === 'speculation'
              }"
            >
              {{ t(`common.status.${report.category === 'rumor' ? 'rumored' : report.category === 'media' ? 'confirmed' : 'speculated'}`) }}
            </span>
          </div>

          <h3 class="font-display font-semibold text-xl text-white mb-3 group-hover:text-primary-400 transition-colors">
            {{ report.title }}
          </h3>
          
          <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              {{ report.source }}
            </span>
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ report.date }}
            </span>
          </div>

          <p class="text-gray-400 text-sm mb-6 line-clamp-3">
            {{ report.excerpt }}
          </p>

          <a
            :href="report.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
          >
            {{ t('reports.readMore') }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { reports } from '@/data/reports'

const { t } = useI18n()

const activeFilter = ref('all')

const filters = [
  { label: 'all', value: 'all' },
  { label: 'rumor', value: 'rumor' },
  { label: 'media', value: 'media' },
  { label: 'speculation', value: 'speculation' }
]

const filteredReports = computed(() => {
  if (activeFilter.value === 'all') return reports
  return reports.filter(report => report.category === activeFilter.value)
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
