import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { i18n } from './locales'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

// Google Analytics (optional - add your GA4 ID)
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Initialize Google Analytics
const GA_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 ID

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  // Load GA script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}
