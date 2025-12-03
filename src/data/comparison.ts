import type { ModelComparison } from '@/types'

export const modelComparisons: ModelComparison[] = [
  {
    name: 'OpenAI Garlic',
    codename: 'Garlic (Internal)',
    release: 'TBA (Rumored Q1 2025)',
    strengths: [
      'Advanced reasoning (reported)',
      'Superior coding capabilities (reported)',
      'Enhanced tool use (speculated)',
      'Improved API integration (reported)'
    ],
    weaknesses: [
      'Unconfirmed capabilities',
      'No official announcement',
      'Unknown pricing',
      'Limited public information'
    ],
    notes: 'Internal codename, not officially confirmed by OpenAI. All information based on media reports and speculation.',
    modelType: 'Frontier Model (Rumored)'
  },
  {
    name: 'Google Gemini 2.0',
    release: 'December 2024',
    strengths: [
      'Native multimodal architecture',
      'Deep Google Search integration',
      'Excellent reasoning capabilities',
      'Strong performance on benchmarks'
    ],
    weaknesses: [
      'Limited third-party integrations',
      'Occasional hallucinations',
      'API pricing concerns'
    ],
    notes: 'Google\'s latest frontier model with advanced multimodal capabilities.',
    modelType: 'Multimodal AI'
  },
  {
    name: 'Anthropic Claude 3.7',
    release: 'November 2024',
    strengths: [
      'Excellent safety and alignment',
      'Strong reasoning and analysis',
      '200K context window',
      'Reliable and consistent outputs'
    ],
    weaknesses: [
      'Conservative response style',
      'Limited multimodal features',
      'Slower processing speed'
    ],
    notes: 'Known for safety-first approach and reliable performance.',
    modelType: 'Constitutional AI'
  },
  {
    name: 'OpenAI GPT-4.1',
    release: 'Available',
    strengths: [
      'Proven track record',
      'Wide ecosystem support',
      'Multimodal capabilities',
      'Strong general performance'
    ],
    weaknesses: [
      'Higher cost',
      'Occasional inconsistencies',
      'Limited context compared to newer models'
    ],
    notes: 'Current flagship model from OpenAI, widely adopted.',
    modelType: 'Large Language Model'
  },
  {
    name: 'Meta Llama 4',
    release: 'Expected 2025',
    strengths: [
      'Open source',
      'Cost-effective',
      'Strong community support',
      'Customizable'
    ],
    weaknesses: [
      'Requires infrastructure',
      'Self-hosting complexity',
      'Performance gaps vs proprietary models'
    ],
    notes: 'Leading open-source alternative with strong community.',
    modelType: 'Open Source LLM'
  }
]
