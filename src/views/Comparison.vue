<template>
  <div class="py-16">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('comparison.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('comparison.subtitle') }}</p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Comparison Table -->
        <div class="mb-12 overflow-x-auto">
          <ComparisonTable :models="comparisonData" />
        </div>

        <!-- Key Takeaways -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-4 flex items-center space-x-2">
              <span class="text-2xl">🔍</span>
              <span>Key Takeaways</span>
            </h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Garlic is expected to lead in reasoning and agentic capabilities</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gemini 3.0 likely retains the edge in native multimodal processing</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Claude 4.5 remains a strong contender for coding and safety</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Open-source alternatives continue to narrow the gap with proprietary models</span>
              </li>
            </ul>
          </div>

          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-4 flex items-center space-x-2">
              <span class="text-2xl">⚠️</span>
              <span>Important Notes</span>
            </h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span>All Garlic model information is unconfirmed and based on speculation</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span>Comparisons should be verified with independent benchmarks upon release</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span>Model capabilities evolve rapidly; this comparison may quickly become outdated</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ComparisonTable from '@/components/ComparisonTable.vue'
import { comparisonData } from '@/data/comparison'

const { t } = useI18n()
</script>
