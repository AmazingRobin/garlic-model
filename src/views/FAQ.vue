<template>
  <div class="py-16 bg-dark-900/30">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('faq.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('faq.subtitle') }}</p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="card group cursor-pointer transition-all duration-200"
          :class="{ 'border-primary-500/30 bg-dark-800': openIndex === index }"
          @click="toggle(index)"
        >
          <div class="flex items-center justify-between">
            <h3 class="font-semibold text-lg text-white group-hover:text-primary-400 transition-colors">
              {{ item.question }}
            </h3>
            <span
              class="ml-4 transform transition-transform duration-200 text-gray-500"
              :class="{ 'rotate-180 text-primary-400': openIndex === index }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          
          <div
            v-show="openIndex === index"
            class="mt-4 text-gray-400 text-sm leading-relaxed border-t border-dark-700 pt-4"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { faqItems } from '@/data/faq'

const { t } = useI18n()
const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
