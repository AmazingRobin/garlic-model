import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/reports',
  '/tech-analysis',
  '/comparison',
  '/faq',
  '/about',
]

// 生成多语言路由
const languages = ['en', 'zh', 'ja', 'ru', 'ko', 'fil', 'pt', 'de', 'fr', 'es']
const allRoutes = routes.flatMap(route =>
  languages.map(lang => lang === 'en' ? route : `/${lang}${route}`)
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://garlic-model.com',
      dynamicRoutes: allRoutes,
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
})
