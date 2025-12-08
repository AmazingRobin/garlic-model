<template>
  <div class="py-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('reports.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('reports.subtitle') }}</p>
        
        <!-- Loading & Last Update Info -->
        <div class="mt-4 flex items-center justify-center gap-4 text-sm">
          <span v-if="isLoading" class="flex items-center text-primary-400">
            <svg class="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading latest news...
          </span>
          
          <span v-if="lastUpdate && !isLoading" class="text-gray-500">
            <svg class="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Last updated: {{ formatLastUpdate(lastUpdate) }}
          </span>
          
          <span v-if="dynamicReports.length > 0" class="text-green-400">
            <svg class="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ dynamicReports.length }} live updates
          </span>
        </div>
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
          v-for="report in filteredReports.slice(0, 9)"
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
            {{ stripHtml(report.excerpt) }}
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

      <!-- View All Button -->
      <div class="mt-12 text-center" v-if="filteredReports.length > 9">
        <router-link 
          to="/reports" 
          class="btn-secondary inline-flex items-center px-8 py-3"
        >
          View All Reports
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { reports as staticReports } from '@/data/reports'
import type { Report } from '@/types'

const { t } = useI18n()

const activeFilter = ref('all')
const dynamicReports = ref<Report[]>([])
const isLoading = ref(false)
const lastUpdate = ref<string>('')
const apiError = ref<string>('')

// Worker API URL - 部署后需要替换为实际的 Worker URL
const WORKER_API_URL = import.meta.env.VITE_WORKER_API_URL || 'https://garlic-news-crawler.YOUR_ACCOUNT.workers.dev/api/reports'

const filters = [
  { label: 'all', value: 'all' },
  { label: 'rumor', value: 'rumor' },
  { label: 'media', value: 'media' },
  { label: 'speculation', value: 'speculation' }
]

// 合并静态和动态数据
const allReports = computed(() => {
  // 合并两个数组，动态数据在前
  const merged = [...dynamicReports.value, ...staticReports]
  
  // 去重（基于 id）
  const seen = new Set<string>()
  return merged.filter(report => {
    if (seen.has(report.id)) return false
    seen.add(report.id)
    return true
  }).sort((a, b) => {
    // 按日期降序排列
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const filteredReports = computed(() => {
  if (activeFilter.value === 'all') return allReports.value
  return allReports.value.filter(report => report.category === activeFilter.value)
})

// 从 Worker API 获取动态新闻
async function fetchDynamicReports() {
  isLoading.value = true
  apiError.value = ''
  
  // Check if API URL is configured
  if (WORKER_API_URL.includes('YOUR_ACCOUNT')) {
    if (import.meta.env.DEV) {
      console.info('ℹ️ Worker API URL not configured. Using static data.')
    }
    isLoading.value = false
    return
  }
  
  try {
    const response = await fetch(WORKER_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.success && Array.isArray(data.reports)) {
      dynamicReports.value = data.reports
      lastUpdate.value = data.lastUpdate || new Date().toISOString()
      console.log(`✅ Loaded ${data.reports.length} dynamic reports from Worker API`)
    }
  } catch (error) {
    console.warn('⚠️ Failed to fetch dynamic reports, using static data only:', error)
    apiError.value = 'Failed to load latest news'
    // 降级到只使用静态数据
    dynamicReports.value = []
  } finally {
    isLoading.value = false
  }
}

// 组件挂载时获取动态数据
onMounted(() => {
  fetchDynamicReports()
})

// 格式化最后更新时间
function formatLastUpdate(isoString: string): string {
  if (!isoString) return ''
  
  try {
    const date = new Date(isoString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`
    
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
    
    // 超过7天显示具体日期
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  } catch {
    return ''
  }
}

// 移除 HTML 标签
// 移除 HTML 标签 (SSR-safe)
function stripHtml(html: string): string {
  if (!html) return ''
  return html.replace(/<[^>]*>?/gm, '')
}


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
