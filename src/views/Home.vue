<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section id="home" class="relative overflow-hidden py-20 md:py-32">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- 动态网格背景 -->
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        
        <!-- 呼吸光晕 -->
        <div class="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        <!-- 浮动 AI 粒子 (模拟神经网络节点) -->
        <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-50"></div>
        <div class="absolute top-3/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-500 opacity-40"></div>
        <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float delay-1000 opacity-60"></div>
        <div class="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full animate-float delay-1500 opacity-30"></div>
        
        <!-- 连接线 (SVG) -->
        <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:0" />
              <stop offset="50%" style="stop-color:rgb(168,85,247);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(59,130,246);stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M100,100 Q400,50 600,300 T1000,500" fill="none" stroke="url(#grad1)" stroke-width="2" class="animate-dash" />
          <path d="M-100,600 Q300,400 500,800 T1200,200" fill="none" stroke="url(#grad1)" stroke-width="2" class="animate-dash delay-1000" />
        </svg>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Icon -->
          <div class="inline-block mb-8">
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center glow-effect mx-auto">
              <span class="text-6xl">🧄</span>
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
            <span class="gradient-text-animated">{{ t('home.hero.title') }}</span>
          </h1>
          
          <p class="text-2xl md:text-3xl text-gray-300 mb-6 font-display">
            {{ t('home.hero.subtitle') }}
          </p>

          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {{ t('home.hero.description') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
import { onMounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import Reports from '@/views/Reports.vue'
import TechAnalysis from '@/views/TechAnalysis.vue'
import Comparison from '@/views/Comparison.vue'
import FAQ from '@/views/FAQ.vue'
import About from '@/views/About.vue'
import { injectSchema, generateArticleSchema } from '@/utils/seo'

const { t } = useI18n()
const route = useRoute()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// 监听 hash 变化，处理页内导航
watch(() => route.hash, (newHash) => {
  if (newHash) {
    const id = newHash.replace('#', '')
    scrollToSection(id)
  }
})

// SEO Configuration using useHead for SSG support
useHead({
  title: computed(() => t('meta.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.description')),
    },
    // Open Graph
    {
      property: 'og:title',
      content: computed(() => t('meta.title')),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.description')),
    },
    {
      property: 'og:url',
      content: 'https://garlic-model.com',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: computed(() => t('meta.title')),
    },
    {
      name: 'twitter:description',
      content: computed(() => t('meta.description')),
    },
  ],
})

onMounted(() => {
  // Check for hash in URL and scroll to it
  if (route.hash) {
    setTimeout(() => {
      const id = route.hash.replace('#', '')
      scrollToSection(id)
    }, 100) // Small delay to ensure DOM is ready
  }

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

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s infinite ease-in-out;
}

@keyframes dash {
  from { stroke-dasharray: 10, 20; stroke-dashoffset: 0; }
  to { stroke-dasharray: 10, 20; stroke-dashoffset: -100; }
}
.animate-dash {
  animation: dash 20s linear infinite;
}

.gradient-text-animated {
  background: linear-gradient(
    to right,
    #fdfbf7 0%,   /* Garlic White */
    #d8b4fe 25%,  /* Garlic Skin Purple */
    #fdfbf7 50%,
    #d8b4fe 75%,
    #fdfbf7 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
