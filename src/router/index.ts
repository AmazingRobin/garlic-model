import { createRouter, createWebHistory, createMemoryHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import CodeSpeed from '@/views/demo/CodeSpeed.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home-en',
    component: Home,
    meta: {
      title: 'OpenAI Garlic Model - The Next Leap in AI Reasoning and Coding',
      description: 'Latest news, rumors, and technical analysis about OpenAI\'s upcoming Garlic model.'
    }
  },
  {
    path: '/reports',
    name: 'all-reports',
    component: () => import('@/views/AllReports.vue'),
    meta: {
      title: 'OpenAI Garlic Model - Reports',
      description: 'Detailed reports and analysis about OpenAI\'s upcoming Garlic model.'
    }
  },
  {
    path: '/code',
    name: 'code-speed-demo',
    component: CodeSpeed,
    meta: {
      title: 'AI Model Coding Speed Comparison',
      description: 'Compare OpenAI Garlic, Claude Opus, Gemini, and MiniMax coding speeds.'
    }
  },
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/',
    name: 'home',
    component: Home,
    meta: {
      title: 'OpenAI Garlic Model - The Next Leap in AI Reasoning and Coding',
      description: 'Latest news, rumors, and technical analysis about OpenAI\'s upcoming Garlic model.'
    }
  },
  // Redirects for old paths or direct access to sections
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/reports',
    redirect: to => ({ path: `/${to.params.lang}/`, hash: '#reports' })
  },
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/tech-analysis',
    redirect: to => ({ path: `/${to.params.lang}/`, hash: '#tech-analysis' })
  },
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/comparison',
    redirect: to => ({ path: `/${to.params.lang}/`, hash: '#comparison' })
  },
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/faq',
    redirect: to => ({ path: `/${to.params.lang}/`, hash: '#faq' })
  },
  {
    path: '/:lang(zh|ja|ru|ko|fil|pt|de|fr|es)/about',
    redirect: to => ({ path: `/${to.params.lang}/`, hash: '#about' })
  },
  // English section redirects
  { path: '/tech-analysis', redirect: { path: '/', hash: '#tech-analysis' } },
  { path: '/comparison', redirect: { path: '/', hash: '#comparison' } },
  { path: '/faq', redirect: { path: '/', hash: '#faq' } },
  { path: '/about', redirect: { path: '/', hash: '#about' } },
  // Catch-all redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for fixed header
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 更新页面标题和meta
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string || 'Garlic Model'
  if (typeof document !== 'undefined') {
    document.title = title

    // 更新meta description
    const description = to.meta.description as string
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)
    }
  }

  next()
})

export default router
