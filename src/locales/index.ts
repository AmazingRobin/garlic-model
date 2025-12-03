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
export async function loadLocaleMessages(locale: Locale) {
  if (i18n.global.availableLocales.includes(locale as any)) {
    return
  }

  try {
    const messages = await import(`./${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)
  } catch (e) {
    console.warn(`Could not load locale: ${locale}`)
  }
}
