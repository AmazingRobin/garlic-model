<template>
  <div class="min-h-screen py-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-heading">{{ t('comparison.title') }}</h1>
        <p class="text-gray-400 text-lg">{{ t('comparison.subtitle') }}</p>
      </div>

      <!-- Comparison Table -->
      <div class="card overflow-hidden">
        <ComparisonTable :models="modelComparisons" />
      </div>

      <!-- Analysis -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="font-display font-semibold text-xl text-white mb-4 flex items-center space-x-2">
            <span class="text-2xl">📊</span>
            <span>Key Takeaways</span>
          </h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Garlic's rumored strengths align with current market demands for advanced reasoning and coding</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Competition is intensifying in the frontier model space</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Each model has different trade-offs between capabilities, safety, and cost</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
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
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span>Always consult official documentation for accurate model information</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ComparisonTable from '@/components/ComparisonTable.vue'
import { modelComparisons } from '@/data/comparison'
import { updateMetaTags } from '@/utils/seo'

const { t } = useI18n()

onMounted(() => {
  updateMetaTags({
    title: 'Model Comparison - Garlic vs Gemini, Claude, GPT-4',
    description: 'Compare OpenAI Garlic with other frontier AI models including Google Gemini, Claude, and GPT-4.',
    url: 'https://garlic-model.com/comparison',
  })
})
</script>
