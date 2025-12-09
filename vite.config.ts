import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// 生成多语言路由
const languages = ['en', 'zh', 'ja', 'ru', 'ko', 'fil', 'pt', 'de', 'fr', 'es']

// 生成所有路由路径
const generateRoutes = () => {
  return languages.flatMap(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`
    return [
      prefix + '/',
      prefix + '/reports'
    ]
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://garlic-model.com',
      dynamicRoutes: generateRoutes(),
      readable: true,
      lastmod: new Date(), // 强制更新 lastmod
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
      return generateRoutes()
    },
    onFinished() {
      console.log('SSG build finished!')
    }
  }
})
