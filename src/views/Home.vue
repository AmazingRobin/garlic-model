<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section id="home" class="relative overflow-hidden py-20 md:py-32">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Icon -->
          <div class="inline-block mb-8 animate-fade-in">
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center glow-effect mx-auto">
              <span class="text-6xl">🧄</span>
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 animate-slide-up">
            <span class="gradient-text">{{ t('home.hero.title') }}</span>
          </h1>
          
          <p class="text-2xl md:text-3xl text-gray-300 mb-6 animate-slide-up font-display">
            {{ t('home.hero.subtitle') }}
          </p>

          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            {{ t('home.hero.description') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up">
            <a href="#reports" class="btn-primary" @click.prevent="scrollToSection('reports')">
              {{ t('home.hero.cta') }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Reports Section -->
    <section id="reports" class="relative">
      <Reports />
    </section>

    <!-- Tech Analysis Section -->
    <section id="tech-analysis" class="relative">
      <TechAnalysis />
    </section>

    <!-- Comparison Section -->
    <section id="comparison" class="relative bg-dark-900/30">
      <Comparison />
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="relative">
      <FAQ />
    </section>

    <!-- About Section -->
    <section id="about" class="relative bg-dark-900/30">
      <About />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Reports from '@/views/Reports.vue'
import TechAnalysis from '@/views/TechAnalysis.vue'
import Comparison from '@/views/Comparison.vue'
import FAQ from '@/views/FAQ.vue'
import About from '@/views/About.vue'
import { updateMetaTags, injectSchema, generateArticleSchema } from '@/utils/seo'

const { t } = useI18n()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Update SEO
  updateMetaTags({
    title: 'OpenAI Garlic Model - The Next Leap in AI Reasoning and Coding | Release Date & Specs',
    description: 'Comprehensive guide to OpenAI\'s rumored Garlic model. Release date (2026 Q1), specs, comparison with Gemini 3.0 & Claude 4.5, and latest news.',
    url: 'https://garlic-model.com',
    type: 'website'
  })

  // Add Article Schema
  const schema = generateArticleSchema({
    headline: 'OpenAI Garlic Model - What We Know So Far',
    description: 'Comprehensive coverage of reports and speculation about OpenAI\'s rumored Garlic model',
    datePublished: '2025-12-03',
    dateModified: new Date().getFullYear() + '-01-01', // Dynamic current year
  })
  injectSchema(schema)
})
</script>
