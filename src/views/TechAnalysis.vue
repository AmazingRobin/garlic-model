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
              Based on recent research papers and infrastructure investments, the "Garlic" model is speculated to utilize a 
              <strong>Mixture-of-Experts (MoE)</strong> architecture with significantly higher parameter efficiency than GPT-4.
            </p>
            <ul>
              <li>Estimated Parameter Count: <strong>1.8T - 2.5T</strong> (Sparse activation)</li>
              <li>Context Window: <strong>2M+ tokens</strong> (speculated)</li>
              <li>Training Compute: Estimated <strong>5x - 10x</strong> GPT-4</li>
            </ul>

            <h3>Key Technical Innovations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div class="bg-dark-800/50 p-6 rounded-xl border border-dark-700">
                <h4 class="text-primary-400 font-semibold mb-2">Deep Research Capabilities</h4>
                <p class="text-sm text-gray-400">Enhanced ability to perform multi-step reasoning and verify facts against external sources autonomously.</p>
              </div>
              <div class="bg-dark-800/50 p-6 rounded-xl border border-dark-700">
                <h4 class="text-cyan-400 font-semibold mb-2">Multimodal Native</h4>
                <p class="text-sm text-gray-400">Built from the ground up to understand and generate text, audio, image, and video seamlessly.</p>
              </div>
            </div>

            <h3>Performance Projections</h3>
            <p>
              Early benchmarks (leaked/rumored) suggest a massive leap in coding and mathematical reasoning:
            </p>
            <div class="overflow-x-auto not-prose my-6">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-dark-700 text-gray-300">
                    <th class="py-2">Benchmark</th>
                    <th class="py-2">GPT-4o</th>
                    <th class="py-2 text-primary-400">Garlic (Est.)</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">MMLU (General Knowledge)</td>
                    <td class="py-2">88.7%</td>
                    <td class="py-2 text-primary-400 font-semibold">92.5%+</td>
                  </tr>
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">HumanEval (Coding)</td>
                    <td class="py-2">90.2%</td>
                    <td class="py-2 text-primary-400 font-semibold">96.0%+</td>
                  </tr>
                  <tr class="border-b border-dark-800">
                    <td class="py-2 text-gray-400">MATH (Mathematics)</td>
                    <td class="py-2">76.6%</td>
                    <td class="py-2 text-primary-400 font-semibold">85.0%+</td>
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
