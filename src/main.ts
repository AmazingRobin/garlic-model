import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router'
import { i18n, loadLocaleMessages } from './locales'
import type { RouteLocationNormalized } from 'vue-router'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router }) => {
    app.use(i18n)

    // Load language based on route params
    router.beforeEach(async (to: RouteLocationNormalized, _from, next) => {
      const lang = to.params.lang as string
      if (lang) {
        await loadLocaleMessages(lang as any)
        i18n.global.locale.value = lang as any
      }
      next()
    })

    // Google Analytics (Client-side only)
    if (import.meta.env.PROD && typeof window !== 'undefined') {
      const GA_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 ID

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA_ID)

      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(script)
    }
  }
)

// Google Analytics Types
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
