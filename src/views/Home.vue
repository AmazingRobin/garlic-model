<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden">
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
            <router-link to="/reports" class="btn-primary">
              {{ t('home.hero.cta') }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
            <router-link to="/about" class="btn-secondary">
              Read Disclaimer
            </router-link>
          </div>

          <!-- Disclaimer Badge -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-300 text-sm animate-fade-in">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>{{ t('home.hero.disclaimer') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16 bg-dark-900/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-heading">{{ t('home.overview.title') }}</h2>
          <p class="text-gray-400 text-lg">{{ t('home.overview.subtitle') }}</p>
          <div class="mt-4 inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
            ⚠️ {{ t('home.overview.disclaimer') }}
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card text-center">
            <div class="text-4xl font-bold gradient-text mb-2">{{ reports.length }}</div>
            <div class="text-gray-400">Media Reports</div>
          </div>
          <div class="card text-center">
            <div class="text-4xl font-bold gradient-text mb-2">{{ features.length }}</div>
            <div class="text-gray-400">Rumored Features</div>
          </div>
          <div class="card text-center">
            <div class="text-4xl font-bold gradient-text mb-2">0</div>
            <div class="text-gray-400">Official Confirmations</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-heading">{{ t('home.features.title') }}</h2>
          <p class="text-gray-400 text-lg">{{ t('home.features.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="card-glow group cursor-pointer"
          >
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="font-display font-semibold text-xl text-white mb-2 flex items-center space-x-2">
              <span>{{ feature.title }}</span>
              <span
                class="px-2 py-0.5 text-xs rounded-full"
                :class="{
                  'bg-green-500/20 text-green-300': feature.status === 'confirmed',
                  'bg-yellow-500/20 text-yellow-300': feature.status === 'rumored',
                  'bg-gray-500/20 text-gray-300': feature.status === 'speculated'
                }"
              >
                {{ feature.status }}
              </span>
            </h3>
            <p class="text-gray-400 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-dark-900/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-heading">{{ t('home.timeline.title') }}</h2>
          <p class="text-gray-400 text-lg">{{ t('home.timeline.subtitle') }}</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <Timeline :events="timelineEvents" />
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-heading">{{ t('home.useCases.title') }}</h2>
          <p class="text-gray-400 text-lg">{{ t('home.useCases.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-3 flex items-center space-x-2">
              <span class="text-2xl">👨‍💻</span>
              <span>Software Development</span>
            </h3>
            <p class="text-gray-400 text-sm">
              Enhanced code generation, debugging, and architecture design capabilities could make it a powerful tool for developers.
            </p>
          </div>

          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-3 flex items-center space-x-2">
              <span class="text-2xl">🏢</span>
              <span>Enterprise Solutions</span>
            </h3>
            <p class="text-gray-400 text-sm">
              Advanced reasoning and tool integration could enable sophisticated business automation and decision support systems.
            </p>
          </div>

          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-3 flex items-center space-x-2">
              <span class="text-2xl">🔬</span>
              <span>Research & Analysis</span>
            </h3>
            <p class="text-gray-400 text-sm">
              Improved reasoning capabilities could support complex research tasks and data analysis workflows.
            </p>
          </div>

          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-3 flex items-center space-x-2">
              <span class="text-2xl">🤖</span>
              <span>Agentic Applications</span>
            </h3>
            <p class="text-gray-400 text-sm">
              Enhanced tool use and real-time processing could enable more autonomous AI agents for various applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10"></div>
      <div class="container-custom relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
          Stay Updated on Garlic Model News
        </h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Explore our collection of media reports, technical analysis, and community discussions.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/reports" class="btn-primary">
            View All Reports
          </router-link>
          <router-link to="/faq" class="btn-secondary">
            Read FAQ
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Timeline from '@/components/Timeline.vue'
import { reports } from '@/data/reports'
import { features } from '@/data/features'
import { timelineEvents } from '@/data/timeline'
import { updateMetaTags, injectSchema, generateArticleSchema } from '@/utils/seo'

const { t } = useI18n()

onMounted(() => {
  // Update SEO
  updateMetaTags({
    title: 'OpenAI Garlic Model - What We Know So Far | Unofficial Info Hub',
    description: 'Independent information hub for OpenAI\'s rumored Garlic model. Aggregating media reports, technical analysis, and community discussions about the next-generation AI.',
    url: 'https://garlic-model.com',
    type: 'website'
  })

  // Add Article Schema
  const schema = generateArticleSchema({
    headline: 'OpenAI Garlic Model - What We Know So Far',
    description: 'Comprehensive coverage of reports and speculation about OpenAI\'s rumored Garlic model',
    datePublished: '2024-12-03',
    dateModified: new Date().toISOString().split('T')[0]!,
  })
  injectSchema(schema)
})
</script>
