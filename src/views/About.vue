<template>
  <div class="py-16">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('about.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('about.subtitle') }}</p>
      </div>

      <div class="max-w-4xl mx-auto">


        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-4">Our Mission</h3>
            <p class="text-gray-400 leading-relaxed">
              To provide a centralized, objective, and up-to-date resource for the AI community to track developments regarding OpenAI's rumored next-generation models. We aim to separate confirmed facts from speculation while providing technical context.
            </p>
          </div>

          <!-- Sources -->
          <div class="card">
            <h3 class="font-display font-semibold text-xl text-white mb-4">Information Sources</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center space-x-2">
                <span class="text-primary-400">✓</span>
                <span>Reputable Tech Media (The Information, Reuters)</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-primary-400">✓</span>
                <span>Research Papers & Technical Documentation</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-primary-400">✓</span>
                <span>Verified Industry Insider Reports</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-primary-400">✓</span>
                <span>Community Analysis & Benchmarks</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact -->
        <div class="mt-12 text-center">
          <p class="text-gray-400 mb-4">Have a tip or correction?</p>
          <a href="mailto:robinli0302@gmail.com" class="btn-primary inline-flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>

        <!-- Last Updated -->
        <div class="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: {{ new Date().getFullYear() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
