import type { TimelineEvent } from '@/types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'tl001',
    date: '2024-11-15',
    title: 'First Mention on Reddit',
    description: 'Initial reports of the "Garlic" codename surface on Reddit\'s OpenAI community, citing anonymous insider sources.',
    source: 'Reddit',
    sourceUrl: 'https://www.reddit.com/r/OpenAI/'
  },
  {
    id: 'tl002',
    date: '2024-11-20',
    title: 'The Information Coverage',
    description: 'The Information publishes a report about OpenAI testing an advanced reasoning model, though without confirming the Garlic codename.',
    source: 'The Information',
    sourceUrl: 'https://www.theinformation.com'
  },
  {
    id: 'tl003',
    date: '2024-11-25',
    title: 'Google Gemini 2.0 Launch',
    description: 'Google announces Gemini 2.0, intensifying speculation about OpenAI\'s competitive response.',
    source: 'Google',
    sourceUrl: 'https://blog.google/technology/ai/google-gemini-2/'
  },
  {
    id: 'tl004',
    date: '2024-11-25',
    title: 'Indian Express Analysis',
    description: 'Indian Express reports on OpenAI\'s strategic positioning against Google Gemini 2.0.',
    source: 'Indian Express',
    sourceUrl: 'https://indianexpress.com'
  },
  {
    id: 'tl005',
    date: '2024-11-28',
    title: 'Financial Analyst Commentary',
    description: 'Seeking Alpha publishes analysis on potential market implications of OpenAI\'s rumored new model.',
    source: 'Seeking Alpha',
    sourceUrl: 'https://seekingalpha.com'
  },
  {
    id: 'tl006',
    date: '2024-12-01',
    title: 'Community Speculation Intensifies',
    description: 'AI research communities across multiple platforms discuss potential Garlic capabilities and applications.',
    source: 'Singularity Hub',
    sourceUrl: 'https://singularityhub.com'
  },
  {
    id: 'tl007',
    date: '2024-12-02',
    title: 'Q1 2025 Release Rumors',
    description: 'TechCrunch reports anonymous sources suggesting a possible Q1 2025 announcement.',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com'
  },
  {
    id: 'tl008',
    date: '2024-12-03',
    title: 'Developer-Focused Reports',
    description: 'VentureBeat highlights potential developer tools and API improvements in OpenAI\'s upcoming release.',
    source: 'VentureBeat',
    sourceUrl: 'https://venturebeat.com'
  }
]
