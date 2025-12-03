import type { ModelComparison } from '@/types'

export const comparisonData: ModelComparison[] = [
  {
    id: 'garlic',
    name: 'OpenAI Garlic',
    developer: 'OpenAI',
    release: '2026 Q1 (Expected)',
    contextWindow: 'Unknown (Rumored 2M+)',
    strengths: [
      'Advanced Reasoning (Deep Research)',
      'Specialized Domain Knowledge',
      'High-Efficiency Pretraining',
      'Next-gen Agentic Capabilities'
    ],
    weaknesses: [
      'Unconfirmed existence',
      'Likely high inference cost',
      'Limited availability initially'
    ],
    isGarlic: true
  },
  {
    id: 'gemini-3',
    name: 'Google Gemini 3.0',
    developer: 'Google',
    release: 'Nov 2025',
    contextWindow: '2M+',
    strengths: [
      'Native Multimodal (Video/3D)',
      'Deep Think Reasoning',
      'Google Ecosystem Integration',
      'Real-time Processing'
    ],
    weaknesses: [
      'Inconsistent logic in edge cases',
      'Strict safety filters'
    ],
    isGarlic: false
  },
  {
    id: 'claude-4-5',
    name: 'Claude 4.5 Opus',
    developer: 'Anthropic',
    release: 'Nov 2025',
    contextWindow: '500K',
    strengths: [
      'Superior Coding & Engineering',
      'Complex Instruction Following',
      'Computer Use / Agentic Tasks',
      'Nuanced Writing'
    ],
    weaknesses: [
      'Slower inference speed',
      'Limited multimodal generation'
    ],
    isGarlic: false
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    developer: 'OpenAI',
    release: 'May 2025',
    contextWindow: '128K',
    strengths: [
      'Voice/Audio Latency',
      'Balanced Performance',
      'Widely Available'
    ],
    weaknesses: [
      'Outdated reasoning capabilities',
      'Lower coding benchmarks'
    ],
    isGarlic: false
  },
]
