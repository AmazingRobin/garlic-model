<template>
  <div class="py-16 bg-dark-900/30">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-heading">{{ t('techAnalysis.title') }}</h2>
        <p class="text-gray-400 text-lg">{{ t('techAnalysis.subtitle') }}</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Analysis Card -->
        <div class="card p-8 md:p-12">
          <div class="prose prose-invert max-w-none">
            <h3>Architecture & Scale</h3>
            <p>
              Contrary to the "bigger is better" trend, leaks suggest "Garlic" is a 
              <strong>High-Density Small Model</strong>. Building on the internal "Shallotpeat" project, it reportedly achieves GPT-5 class performance with a fraction of the parameters.
            </p>
            <ul>
              <li>Architecture: <strong>Dense-MoE Hybrid</strong> (Focus on efficiency)</li>
              <li>Parameter Efficiency: <strong>10x</strong> more knowledge per parameter than GPT-4</li>
              <li>Inference Cost: Estimated <strong>80% lower</strong> than Gemini 3 Ultra</li>
            </ul>

            <h3>Key Technical Innovations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div class="bg-dark-800/50 p-6 rounded-xl border border-dark-700">
                <h4 class="text-primary-400 font-semibold mb-2">Hyper-Efficient Pretraining</h4>
                <p class="text-sm text-gray-400">New techniques allow "Garlic" to compress the knowledge of massive datasets into a smaller, faster architecture without quality loss.</p>
              </div>
              <div class="bg-dark-800/50 p-6 rounded-xl border border-dark-700">
                <h4 class="text-cyan-400 font-semibold mb-2">Agentic Reasoning Core</h4>
                <p class="text-sm text-gray-400">Designed specifically for long-horizon agentic workflows, outperforming Opus 4.5 in autonomous coding tasks.</p>
              </div>
            </div>

            <h3>Performance Projections</h3>
            <p>
              Internal evaluation leaks indicate "Garlic" is beating the current SOTA models (Gemini 3 & Claude Opus 4.5) in key reasoning benchmarks:
            </p>
            <div class="overflow-x-auto not-prose my-6">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-dark-700 text-gray-300">
                    <th class="py-2">Benchmark</th>
                    <th class="py-2">Current SOTA (Gemini 3 / Opus 4.5)</th>
                    <th class="py-2 text-primary-400">Garlic (Internal)</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">SWE-bench Verified (Coding)</td>
                    <td class="py-2">80.9% (Opus 4.5)</td>
                    <td class="py-2 text-primary-400 font-semibold">88.5%+</td>
                  </tr>
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">GPQA Diamond (Science)</td>
                    <td class="py-2">93.8% (Gemini 3)</td>
                    <td class="py-2 text-primary-400 font-semibold">96.2%+</td>
                  </tr>
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">AIME 2025 (Math)</td>
                    <td class="py-2">100% (Gemini 3)</td>
                    <td class="py-2 text-primary-400 font-semibold">100% (4x Faster)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-8 not-prose">
              <p class="text-yellow-200 text-sm flex items-start">
                <span class="mr-2">⚠️</span>
                {{ t('techAnalysis.disclaimer') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Styles can be simplified as we are not using dynamic markdown anymore */
</style>
