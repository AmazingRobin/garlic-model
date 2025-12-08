<template>
  <div class="py-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="mb-6">
          <router-link to="/" class="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </router-link>
        </div>
        <h1 class="section-heading">All Media Reports & Discussions</h1>
        <p class="text-gray-400 text-lg">Comprehensive archive of all news and updates</p>
        
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
          v-for="(report, index) in paginatedReports"
          :key="report.id"
          :id="currentPage === 1 && index === 8 ? 'scroll-target' : undefined"
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

      <!-- Pagination -->
      <div class="mt-12 flex justify-center items-center space-x-4" v-if="totalPages > 1">
        <!-- Previous Button -->
        <button 
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="p-2 rounded-lg border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Page Numbers -->
        <div class="flex space-x-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            class="w-10 h-10 rounded-lg border font-medium transition-all duration-200"
            :class="currentPage === page 
              ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/25' 
              : 'bg-dark-800 text-gray-400 border-dark-700 hover:border-gray-600 hover:text-white'"
          >
            {{ page }}
          </button>
        </div>

        <!-- Next Button -->
        <button 
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="p-2 rounded-lg border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { reports as staticReports } from '@/data/reports'
import type { Report } from '@/types'

const { t } = useI18n()

const activeFilter = ref('all')
const dynamicReports = ref<Report[]>([])
const isLoading = ref(false)
const lastUpdate = ref<string>('')
const apiError = ref<string>('')

// 分页状态
const currentPage = ref(1)
const itemsPerPage = 12

// Worker API URL
const WORKER_API_URL = import.meta.env.VITE_WORKER_API_URL || 'https://garlic-news-crawler.YOUR_ACCOUNT.workers.dev/api/reports'

const filters = [
  { label: 'all', value: 'all' },
  { label: 'rumor', value: 'rumor' },
  { label: 'media', value: 'media' },
  { label: 'speculation', value: 'speculation' }
]

// 合并静态和动态数据
const allReports = computed(() => {
  const merged = [...dynamicReports.value, ...staticReports]
  const seen = new Set<string>()
  return merged.filter(report => {
    if (seen.has(report.id)) return false
    seen.add(report.id)
    return true
  }).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const filteredReports = computed(() => {
  if (activeFilter.value === 'all') return allReports.value
  return allReports.value.filter(report => report.category === activeFilter.value)
})

// 分页计算
const totalPages = computed(() => Math.ceil(filteredReports.value.length / itemsPerPage))

const paginatedReports = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredReports.value.slice(start, end)
})

// 切换页码
function changePage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'auto' })
}

// 监听筛选变化，重置页码
watch(activeFilter, () => {
  currentPage.value = 1
})

// 滚动到第9个元素 (仅在第一页且非筛选状态下有效，或者根据需求调整)
// 这里我们保留逻辑，但只在初始化加载时使用
async function scrollToTarget() {
  await nextTick()
  // 只有在第一页才尝试滚动，避免翻页时乱跳
  if (currentPage.value === 1) {
    const target = document.getElementById('scroll-target')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}

// 从 Worker API 获取动态新闻
async function fetchDynamicReports() {
  isLoading.value = true
  window.scrollTo({ top: 0, behavior: 'auto' })
  apiError.value = ''
  
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
    dynamicReports.value = []
  } finally {
    isLoading.value = false
    // 数据加载完成后滚动
    scrollToTarget()
  }
}

// 组件挂载时获取动态数据
onMounted(() => {
  // 强制滚动到顶部
  window.scrollTo({ top: 0, behavior: 'auto' })
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
function stripHtml(html: string): string {
  if (!html) return ''
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
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
