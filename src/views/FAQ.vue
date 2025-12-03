<template>
  <div class="min-h-screen py-16">
    <div class="container-custom max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-heading">{{ t('faq.title') }}</h1>
        <p class="text-gray-400 text-lg">{{ t('faq.subtitle') }}</p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="card cursor-pointer hover:border-primary-500/30 transition-all duration-300"
          @click="toggleItem(item.id)"
        >
          <!-- Question -->
          <div class="flex items-center justify-between">
            <h3 class="font-display font-semibold text-lg text-white pr-4">
              {{ item.question }}
            </h3>
            <svg
              class="w-6 h-6 text-primary-400 flex-shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openItems.includes(item.id) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Answer -->
          <transition name="expand">
            <div v-if="openItems.includes(item.id)" class="mt-4 pt-4 border-t border-dark-700">
              <p class="text-gray-400 leading-relaxed">{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 card bg-primary-500/5 border-primary-500/20">
        <h3 class="font-display font-semibold text-xl text-white mb-4 flex items-center space-x-2">
          <span class="text-2xl">💡</span>
          <span>Still Have Questions?</span>
        </h3>
        <p class="text-gray-400 mb-4">
          This FAQ is based on publicly available information and common questions about the rumored Garlic model. 
          For official information, please visit OpenAI's website.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://openai.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center space-x-2"
          >
            <span>Visit OpenAI</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <router-link to="/reports" class="btn-secondary">
            View All Reports
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faqItems } from '@/data/faq'
import { updateMetaTags, injectSchema, generateFAQSchema } from '@/utils/seo'

const { t } = useI18n()

const openItems = ref<string[]>([])

const toggleItem = (id: string) => {
  const index = openItems.value.indexOf(id)
  if (index > -1) {
    openItems.value.splice(index, 1)
  } else {
    openItems.value.push(id)
  }
}

onMounted(() => {
  updateMetaTags({
    title: 'FAQ - Garlic Model Questions & Answers',
    description: 'Frequently asked questions about OpenAI\'s rumored Garlic model, including release dates, capabilities, and sources.',
    url: 'https://garlic-model.com/faq',
  })

  // Add FAQ Schema
  const schema = generateFAQSchema(faqItems.map(item => ({
    question: item.question,
    answer: item.answer
  })))
  injectSchema(schema)
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
