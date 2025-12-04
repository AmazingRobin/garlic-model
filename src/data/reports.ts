import type { Report } from '@/types'

export const reports: Report[] = [
  {
    id: 'r20251204-1',
    title: 'OpenAI Declares "Code Red" and Goes All Systems "Garlic"',
    source: 'The Neuron Daily',
    sourceUrl: 'https://theneurondaily.com/p/openai-declares-code-red-and-goes-all-systems-garlic',
    date: '2025-12-04',
    category: 'media',
    excerpt: 'OpenAI declared "Code Red" in response to Google\'s Gemini 3.0. But they\'re not just playing defense - they\'re building a new model codenamed "Garlic" that\'s reportedly performing well against both Gemini 3 and Anthropic\'s Opus 4.5 in internal tests.',
    tags: ['code-red', 'competition', 'gemini-3']
  },
  {
    id: 'r20251204-2',
    title: 'OpenAI CEO Declares "Code Red" to Combat Threats to ChatGPT',
    source: 'The Information',
    sourceUrl: 'https://www.theinformation.com/articles/openai-ceo-declares-code-red-combat-threats-chatgpt-delays-ads-effort',
    date: '2025-12-01',
    category: 'media',
    excerpt: 'Sam Altman\'s internal memo requested the team freeze all non-essential projects like shopping agents, health tools, and advertising, to focus everything on making ChatGPT better.',
    tags: ['code-red', 'memo', 'chatgpt']
  },
  {
    id: 'r20251204-3',
    title: 'OpenAI Is Secretly Fast-Tracking "Garlic" to Fix ChatGPT\'s Biggest Flaws',
    source: 'ZDNet',
    sourceUrl: 'https://www.zdnet.com/article/openai-is-secretly-fast-tracking-garlic-to-fix-chatgpts-biggest-flaws-what-we-know/',
    date: '2025-12-03',
    category: 'media',
    excerpt: 'OpenAI\'s new "Garlic" model introduces major improvements in pretraining, enabling the team to fit the knowledge of large models into much smaller architectures. We might see it drop as GPT-5.2 or GPT-5.5 early next year.',
    tags: ['garlic', 'efficiency', 'gpt-5']
  },
  {
    id: 'r20251204-4',
    title: 'Garlic: OpenAI\'s New Small Model That Beats Gemini 3 & Opus 4.5 in Coding',
    source: 'Reddit r/OpenAI',
    sourceUrl: 'https://www.reddit.com/r/OpenAI/comments/1pcd296/garlic_openais_new_small_model_that_beats_gemini/',
    date: '2025-12-04',
    category: 'rumor',
    excerpt: 'In internal tests, Garlic reportedly outperforms both Google\'s Gemini 3 and Anthropic\'s Opus 4.5 in coding and reasoning tasks. This model addresses structural issues found in earlier versions like GPT-4.5.',
    tags: ['benchmark', 'coding', 'reasoning']
  },
  {
    id: 'r20251204-5',
    title: 'OpenAI Code Red: Google and Anthropic Competition Heats Up',
    source: 'CNBC',
    sourceUrl: 'https://www.cnbc.com/2025/12/02/open-ai-code-red-google-anthropic.html',
    date: '2025-12-02',
    category: 'media',
    excerpt: 'OpenAI\'s memo requested the team freeze all non-essential projects and focus everything on making ChatGPT better. Gemini 3 topped industry benchmarks when it launched last month.',
    tags: ['code-red', 'google', 'anthropic']
  },
  {
    id: 'r20251204-6',
    title: 'Salesforce CEO Marc Benioff: "I\'m Not Going Back" After Trying Gemini 3',
    source: 'Axios',
    sourceUrl: 'https://www.axios.com/2025/11/25/google-gemini-openai-chatgpt-anthropic-claude',
    date: '2025-11-25',
    category: 'media',
    excerpt: 'Salesforce CEO Marc Benioff publicly endorsed Google\'s Gemini 3, putting pressure on OpenAI. ChatGPT still has 800M weekly users compared to Gemini\'s 650M monthly users.',
    tags: ['gemini-3', 'competition', 'endorsement']
  }
]
