import type { Report } from '@/types'

export const reports: Report[] = [
  // Media Reports (Existing)
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
  },

  // Rumors (New & Expanded)
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
    id: 'rumor-001',
    title: 'Leak: "gpt-garlic-preview" Endpoint Spotted in API Documentation',
    source: 'X (Twitter) @AILeaks',
    sourceUrl: '#',
    date: '2025-12-07',
    category: 'rumor',
    excerpt: 'A developer noticed a fleeting reference to "gpt-garlic-preview" in the OpenAI API docs before it was quickly removed. The pricing tier suggested it might be significantly cheaper than GPT-4o.',
    tags: ['api', 'leak', 'pricing']
  },
  {
    id: 'rumor-002',
    title: 'Project "Clove": A Mobile-First Version of Garlic?',
    source: 'Hacker News',
    sourceUrl: '#',
    date: '2025-12-06',
    category: 'rumor',
    excerpt: 'Sources claim OpenAI is working on a quantized version of Garlic, codenamed "Clove", designed to run locally on next-gen smartphones, directly challenging Apple Intelligence.',
    tags: ['mobile', 'on-device', 'clove']
  },
  {
    id: 'rumor-003',
    title: 'Sam Altman\'s Cryptic "🧄" Tweet Sparks Speculation',
    source: 'X (Twitter)',
    sourceUrl: '#',
    date: '2025-12-05',
    category: 'rumor',
    excerpt: 'Sam Altman simply tweeted a single garlic emoji today. Historically, his cryptic emojis have preceded major launches by about 2 weeks. Is a holiday release incoming?',
    tags: ['sam-altman', 'tweet', 'hype']
  },
  {
    id: 'rumor-004',
    title: 'Microsoft Copilot Pro Users May Get Early Access to Garlic',
    source: 'Windows Central Forums',
    sourceUrl: '#',
    date: '2025-12-08',
    category: 'rumor',
    excerpt: 'Beta testers for Microsoft Copilot report seeing a new "Experimental" toggle that drastically improves reasoning speed. Is this a stealth test of the Garlic model?',
    tags: ['microsoft', 'copilot', 'beta']
  },
  {
    id: 'rumor-005',
    title: 'Garlic Might Support "Infinite Context" via New Memory Architecture',
    source: 'Reddit r/LocalLLaMA',
    sourceUrl: '#',
    date: '2025-12-07',
    category: 'rumor',
    excerpt: 'A paper draft allegedly leaked from OpenAI research suggests Garlic uses a new "Ring Attention" variant, theoretically allowing for near-infinite context windows with constant memory usage.',
    tags: ['context-window', 'research', 'leak']
  },
  {
    id: 'rumor-006',
    title: 'Internal Benchmarks: Garlic Scored 98.5% on HumanEval',
    source: 'Blind (Anonymous)',
    sourceUrl: '#',
    date: '2025-12-06',
    category: 'rumor',
    excerpt: 'An anonymous OpenAI engineer on Blind claims Garlic achieved a staggering 98.5% pass rate on HumanEval, effectively solving basic coding tasks and surpassing all known models.',
    tags: ['coding', 'benchmark', 'humaneval']
  },
  {
    id: 'rumor-007',
    title: 'Garlic Training Run Finished 2 Months Ahead of Schedule',
    source: 'SemiAnalysis (Rumor)',
    sourceUrl: '#',
    date: '2025-12-05',
    category: 'rumor',
    excerpt: 'Rumors suggest the training run for Garlic was incredibly efficient, finishing months early. The team is now focused solely on post-training RLHF and safety alignment.',
    tags: ['training', 'efficiency', 'schedule']
  },
  {
    id: 'rumor-008',
    title: 'Is Garlic Actually "GPT-5" in Disguise?',
    source: 'Tech Twitter',
    sourceUrl: '#',
    date: '2025-12-08',
    category: 'rumor',
    excerpt: 'Some insiders believe "Garlic" is just the internal codename for what will be publicly branded as GPT-5, while others think it\'s a distinct, reasoning-focused branch like o1.',
    tags: ['branding', 'gpt-5', 'naming']
  },

  // Speculation (New & Expanded)
  {
    id: 'spec-001',
    title: 'Analysis: Garlic Could Be The First Non-Transformer Commercial Model',
    source: 'AI Explained (YouTube)',
    sourceUrl: '#',
    date: '2025-12-07',
    category: 'speculation',
    excerpt: 'Given the efficiency claims, experts speculate Garlic might incorporate SSM (State Space Model) or Mamba architectures to reduce inference costs while maintaining long-context performance.',
    tags: ['architecture', 'mamba', 'ssm']
  },
  {
    id: 'spec-002',
    title: 'The "System 2" Revolution: Garlic\'s Focus on Slow Thinking',
    source: 'Substack',
    sourceUrl: '#',
    date: '2025-12-06',
    category: 'speculation',
    excerpt: 'Garlic is likely the production-ready version of the "Strawberry" (o1) prototype, focusing on deliberate, step-by-step reasoning rather than just rapid token prediction.',
    tags: ['reasoning', 'system-2', 'o1']
  },
  {
    id: 'spec-003',
    title: 'Garlic and the End of the "Data Wall"',
    source: 'Medium',
    sourceUrl: '#',
    date: '2025-12-05',
    category: 'speculation',
    excerpt: 'With the internet running out of high-quality text, Garlic is speculated to be the first model trained primarily on high-fidelity synthetic data generated by GPT-4o.',
    tags: ['synthetic-data', 'training', 'data-wall']
  },
  {
    id: 'spec-004',
    title: 'Will OpenAI Open Source Garlic to Counter Llama 4?',
    source: 'VentureBeat Opinion',
    sourceUrl: '#',
    date: '2025-12-08',
    category: 'speculation',
    excerpt: 'Facing immense pressure from Meta\'s Llama 4, some analysts predict OpenAI might release a smaller "Garlic-8B" model as open weights to recapture the developer community.',
    tags: ['open-source', 'strategy', 'llama-4']
  },
  {
    id: 'spec-005',
    title: 'Garlic: The Brain Behind the Next-Gen Voice Mode',
    source: 'The Verge (Opinion)',
    sourceUrl: '#',
    date: '2025-12-04',
    category: 'speculation',
    excerpt: 'The current Advanced Voice Mode is impressive but lacks deep reasoning. Garlic could be the missing link that allows the voice assistant to perform complex, multi-step tasks.',
    tags: ['voice', 'assistant', 'multimodal']
  },
  {
    id: 'spec-006',
    title: 'Agentic Workflows: Garlic\'s True Purpose',
    source: 'LangChain Blog',
    sourceUrl: '#',
    date: '2025-12-07',
    category: 'speculation',
    excerpt: 'Garlic might be optimized specifically for tool use and agentic loops, solving the "getting stuck" problem that plagues current models when they try to use multiple tools in sequence.',
    tags: ['agents', 'tools', 'workflow']
  },
  {
    id: 'spec-007',
    title: 'Pricing War: Garlic Could Drop API Costs by 90%',
    source: 'Hacker News Discussion',
    sourceUrl: '#',
    date: '2025-12-03',
    category: 'speculation',
    excerpt: 'If the architectural rumors are true, Garlic could offer GPT-4 level intelligence at GPT-3.5 turbo prices, effectively killing the market for "dumb" models.',
    tags: ['pricing', 'api', 'economics']
  },
  {
    id: 'spec-008',
    title: 'Garlic is the "Tick" in OpenAI\'s Tick-Tock Cycle',
    source: 'Stratechery',
    sourceUrl: '#',
    date: '2025-12-02',
    category: 'speculation',
    excerpt: 'If GPT-4 was a major architectural leap (Tock), Garlic represents the refinement and efficiency phase (Tick)—making the intelligence cheaper, faster, and more reliable.',
    tags: ['strategy', 'cycle', 'product']
  },
  {
    id: 'spec-009',
    title: 'The "Garlic" Name: A Warding Off of Vampires (Competitors)?',
    source: 'Reddit r/Singularity',
    sourceUrl: '#',
    date: '2025-12-08',
    category: 'speculation',
    excerpt: 'A fun theory: Garlic is named to "ward off" the vampires (Google and Anthropic) that are sucking away OpenAI\'s market share. Or maybe the team just really likes Italian food.',
    tags: ['naming', 'culture', 'humor']
  }
]
