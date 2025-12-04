import type { ModelComparison } from '@/types'

export const comparisonData: ModelComparison[] = [
  {
    id: 'garlic',
    name: 'OpenAI Garlic',
    developer: 'OpenAI',
    release: '2026 Q1 (Expected)',
    contextWindow: '2M+ (Speculated)',
    strengths: [
      'Superior Coding & Reasoning (Internal Tests)',
      'Efficient Pretraining Architecture',
      'Potential GPT-5.2 or GPT-5.5 Branding',
      'Addresses GPT-4.5 Structural Issues'
    ],
    weaknesses: [
      'Still in development',
      'Limited public information',
      'Unconfirmed specifications'
    ],
    isGarlic: true
  },
  {
    id: 'gemini-3',
    name: 'Google Gemini 3',
    developer: 'Google DeepMind',
    release: 'Nov 18, 2025',
    contextWindow: '1M tokens',
    strengths: [
      'LMArena #1 (1501 Elo)',
      'Deep Think Mode for PhD-level Reasoning',
      'AIME 2025: 100% with code execution',
      'SWE-bench: 76.2%',
      'WebDev Arena #1 (1487 Elo)',
      'Agentic & Vibe Coding',
      'Google Ecosystem Integration'
    ],
    weaknesses: [
      'Workspace AI integrations still inconsistent',
      'Deep Think requires AI Ultra subscription'
    ],
    isGarlic: false
  },
  {
    id: 'claude-opus-4-5',
    name: 'Claude Opus 4.5',
    developer: 'Anthropic',
    release: 'Nov 24, 2025',
    contextWindow: '200K (extended)',
    strengths: [
      'SWE-bench Verified: 80.9% (SOTA)',
      'First model to cross 80% SWE-bench',
      'Superior Computer Use & Agentic Tasks',
      'Vals.ai #1 Overall (63.9%)',
      'Effort Parameter for Quality/Cost Trade-off',
      '65% fewer tokens than previous Opus',
      'Best Vision Model (MMMU 80.7%)'
    ],
    weaknesses: [
      'Trails Gemini 3 in Humanities Last Exam',
      'Higher latency at max effort'
    ],
    isGarlic: false
  },
  {
    id: 'gpt-5-1',
    name: 'GPT-5.1',
    developer: 'OpenAI',
    release: 'Sep 2025',
    contextWindow: '256K',
    strengths: [
      'Balanced Performance',
      'Widely Available',
      'ChatGPT 800M Weekly Users'
    ],
    weaknesses: [
      'Behind Gemini 3 on LMArena',
      'Trailing Claude Opus 4.5 on Vals.ai (60.5%)',
      'Prompted "Code Red" response'
    ],
    isGarlic: false
  },
  {
    id: 'deepseek-v3-2',
    name: 'DeepSeek V3.2',
    developer: 'DeepSeek',
    release: 'Dec 1, 2025',
    contextWindow: '128K',
    strengths: [
      'Open-Source / API Access',
      'Competitive Reasoning',
      'Cost-Effective'
    ],
    weaknesses: [
      'Smaller ecosystem',
      'Limited multimodal capabilities'
    ],
    isGarlic: false
  }
]
