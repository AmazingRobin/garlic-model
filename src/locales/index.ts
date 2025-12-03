import { createI18n } from 'vue-i18n'
import en from './en.json'
import type { Locale } from '@/types'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  }
})

// 动态加载其他语言
// 动态加载其他语言
export async function loadLocaleMessages(locale: Locale) {
  if (i18n.global.availableLocales.includes(locale as any)) {
    return
  }

  try {
    const modules = import.meta.glob('./*.json')
    const path = `./${locale}.json`

    if (modules[path]) {
      const messages = await modules[path]() as any
      i18n.global.setLocaleMessage(locale, messages.default)
    } else {
      console.warn(`Locale file not found: ${path}`)
    }
  } catch (e) {
    console.warn(`Could not load locale: ${locale}`, e)
  }
}
