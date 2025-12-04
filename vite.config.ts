import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// 生成多语言路由
const languages = ['en', 'zh', 'ja', 'ru', 'ko', 'fil', 'pt', 'de', 'fr', 'es']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://garlic-model.com',
      dynamicRoutes: languages.map(lang => lang === 'en' ? '/' : `/${lang}/`),
      readable: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
  // @ts-ignore - vite-ssg options
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {
      // Generate routes for all languages
      return languages.map(lang => lang === 'en' ? '/' : `/${lang}/`)
    },
    onFinished() {
      console.log('SSG build finished!')
    }
  }
})
