export interface Report {
  id: string
  title: string
  source: string
  sourceUrl: string
  date: string
  category: 'rumor' | 'media' | 'speculation'
  excerpt: string
  tags: string[]
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  status: 'confirmed' | 'rumored' | 'speculated'
}

export interface ModelComparison {
  name: string
  codename?: string
  release: string
  strengths: string[]
  weaknesses: string[]
  notes: string
  modelType?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  source: string
  sourceUrl: string
}

export type Locale = 'en' | 'zh' | 'ja' | 'ru' | 'ko' | 'fil' | 'pt' | 'de' | 'fr' | 'es'

export interface LocaleOption {
  code: Locale
  name: string
  flag: string
}
