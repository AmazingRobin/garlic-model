import type { Report } from '@/types'

export const reports: Report[] = [
  {
    id: 'r001',
    title: 'OpenAI\'s Next Frontier Model Code-Named "Garlic" Leaked on Reddit',
    source: 'Reddit',
    sourceUrl: 'https://www.reddit.com/r/OpenAI/',
    date: '2024-11-15',
    category: 'rumor',
    excerpt: 'A Reddit user claims to have insider information about OpenAI\'s upcoming model codenamed "Garlic", suggesting it focuses on enhanced reasoning and coding capabilities.',
    tags: ['codename', 'reddit', 'leak']
  },
  {
    id: 'r002',
    title: 'The Information Reports OpenAI Testing Advanced Reasoning Model',
    source: 'The Information',
    sourceUrl: 'https://www.theinformation.com',
    date: '2024-11-20',
    category: 'media',
    excerpt: 'According to The Information, OpenAI is internally testing a new model with significantly improved reasoning capabilities, though the company has not confirmed the "Garlic" codename.',
    tags: ['reasoning', 'testing', 'the-information']
  },
  {
    id: 'r003',
    title: 'Indian Express: OpenAI Preparing Response to Google Gemini 2.0',
    source: 'Indian Express',
    sourceUrl: 'https://indianexpress.com',
    date: '2024-11-25',
    category: 'media',
    excerpt: 'Indian Express reports that OpenAI is developing a competitive model to rival Google\'s Gemini 2.0, with enhanced multimodal capabilities and improved coding performance.',
    tags: ['competition', 'gemini', 'multimodal']
  },
  {
    id: 'r004',
    title: 'Seeking Alpha: OpenAI\'s Strategic Move Against Google',
    source: 'Seeking Alpha',
    sourceUrl: 'https://seekingalpha.com',
    date: '2024-11-28',
    category: 'speculation',
    excerpt: 'Financial analysts speculate that OpenAI\'s rumored new model could be a strategic response to increasing competition from Google and Anthropic in the AI reasoning space.',
    tags: ['strategy', 'analysis', 'market']
  },
  {
    id: 'r005',
    title: 'Singularity Community Discusses Garlic Model Capabilities',
    source: 'Singularity Hub',
    sourceUrl: 'https://singularityhub.com',
    date: '2024-12-01',
    category: 'speculation',
    excerpt: 'The AI research community on Singularity Hub debates the potential capabilities of the rumored Garlic model, including advanced tool use and agentic workflows.',
    tags: ['community', 'capabilities', 'speculation']
  },
  {
    id: 'r006',
    title: 'TechCrunch: Unnamed Sources Hint at Q1 2025 Release',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    date: '2024-12-02',
    category: 'rumor',
    excerpt: 'Anonymous sources suggest OpenAI may announce a new model in Q1 2025, though the connection to the "Garlic" codename remains unverified.',
    tags: ['release', 'timeline', 'q1-2025']
  },
  {
    id: 'r007',
    title: 'VentureBeat: Focus on Developer Tools and API Improvements',
    source: 'VentureBeat',
    sourceUrl: 'https://venturebeat.com',
    date: '2024-12-03',
    category: 'media',
    excerpt: 'VentureBeat reports that OpenAI\'s upcoming model will prioritize developer experience with improved API capabilities and better tool integration.',
    tags: ['developers', 'api', 'tools']
  }
]
