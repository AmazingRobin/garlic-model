<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-cyan-500 to-transparent"></div>

    <!-- Timeline Events -->
    <div class="space-y-8">
      <div
        v-for="(event, index) in events"
        :key="event.id"
        class="relative flex flex-col md:flex-row items-start md:items-center gap-6"
        :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <!-- Timeline Dot -->
        <div class="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-dark-950 rounded-full border-4 border-primary-500 flex items-center justify-center z-10">
          <div class="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
        </div>

        <!-- Content -->
        <div
          class="flex-1 ml-16 md:ml-0"
          :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'"
        >
          <div class="card animate-fade-in hover:scale-105 transition-transform duration-300">
            <div class="mb-2">
              <span class="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                {{ formatDate(event.date) }}
              </span>
            </div>
            <h3 class="font-display font-semibold text-lg text-white mb-2">
              {{ event.title }}
            </h3>
            <p class="text-gray-400 text-sm mb-3">
              {{ event.description }}
            </p>
            <a
              :href="event.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-1 text-primary-400 hover:text-primary-300 text-sm transition-colors duration-200"
            >
              <span>{{ event.source }}</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Spacer for alignment -->
        <div class="hidden md:block flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineEvent } from '@/types'

interface Props {
  events: TimelineEvent[]
}

defineProps<Props>()

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}
</script>
