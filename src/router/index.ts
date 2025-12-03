import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'OpenAI Garlic Model - What We Know So Far',
      description: 'Independent information hub for OpenAI\'s rumored Garlic model. Aggregating media reports, technical analysis, and community discussions about the next-generation AI.',
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/views/Reports.vue'),
    meta: {
      title: 'Media Reports - Garlic Model',
      description: 'Comprehensive collection of media reports and news coverage about OpenAI\'s rumored Garlic model from various sources.',
    }
  },
  {
    path: '/tech-analysis',
    name: 'TechAnalysis',
    component: () => import('@/views/TechAnalysis.vue'),
    meta: {
      title: 'Technical Analysis - Garlic Model',
      description: 'Technical analysis and speculation about the capabilities and architecture of OpenAI\'s rumored Garlic model.',
    }
  },
  {
    path: '/comparison',
    name: 'Comparison',
    component: () => import('@/views/Comparison.vue'),
    meta: {
      title: 'Model Comparison - Garlic vs Other AI Models',
      description: 'Compare OpenAI Garlic with other frontier AI models including Google Gemini, Claude, and GPT-4.',
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/FAQ.vue'),
    meta: {
      title: 'FAQ - Garlic Model Questions',
      description: 'Frequently asked questions about OpenAI\'s rumored Garlic model, including release dates, capabilities, and sources.',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About - Disclaimer & Information',
      description: 'About this independent information site. Important disclaimers and information about our sources and purpose.',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// 更新页面标题和meta
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string || 'Garlic Model'
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

  next()
})

export default router
