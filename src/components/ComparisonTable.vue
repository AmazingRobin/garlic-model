<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-dark-700">
          <th class="px-4 py-4 text-left text-sm font-semibold text-gray-300">{{ t('comparison.table.model') }}</th>
          <th class="px-4 py-4 text-left text-sm font-semibold text-gray-300">{{ t('comparison.table.release') }}</th>
          <th class="px-4 py-4 text-left text-sm font-semibold text-gray-300">Context</th>
          <th class="px-4 py-4 text-left text-sm font-semibold text-gray-300">{{ t('comparison.table.strengths') }}</th>
          <th class="px-4 py-4 text-left text-sm font-semibold text-gray-300">{{ t('comparison.table.weaknesses') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(model, index) in models"
          :key="index"
          class="border-b border-dark-800 hover:bg-dark-800/30 transition-colors duration-200"
          :class="{ 'bg-primary-500/5': model.isGarlic }"
        >
          <!-- Model Name -->
          <td class="px-4 py-4">
            <div>
              <div class="font-semibold text-white flex items-center space-x-2">
                <span>{{ model.name }}</span>
                <span v-if="model.isGarlic" class="px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                  Expected
                </span>
              </div>
              <div class="text-xs text-primary-400 mt-1">
                {{ model.developer }}
              </div>
            </div>
          </td>

          <!-- Release -->
          <td class="px-4 py-4 text-sm text-gray-400">
            {{ model.release }}
          </td>

          <!-- Context Window -->
          <td class="px-4 py-4 text-sm text-gray-400">
            {{ model.contextWindow }}
          </td>

          <!-- Strengths -->
          <td class="px-4 py-4">
            <ul class="space-y-1">
              <li
                v-for="(strength, idx) in model.strengths"
                :key="idx"
                class="text-sm text-gray-300 flex items-start space-x-2"
              >
                <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ strength }}</span>
              </li>
            </ul>
          </td>

          <!-- Weaknesses -->
          <td class="px-4 py-4">
            <ul class="space-y-1">
              <li
                v-for="(weakness, idx) in model.weaknesses"
                :key="idx"
                class="text-sm text-gray-400 flex items-start space-x-2"
              >
                <svg class="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ weakness }}</span>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ModelComparison } from '@/types'

interface Props {
  models: ModelComparison[]
}

defineProps<Props>()

const { t } = useI18n()
</script>
