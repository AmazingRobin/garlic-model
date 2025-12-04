
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'OpenAI Garlic Model - The Next Leap in AI Reasoning and Coding',
        description: 'Latest news, rumors, and technical analysis about OpenAI\'s upcoming Garlic model.'
      }
    },
    {
      path: '/reports',
      redirect: { path: '/', hash: '#reports' }
    },
    {
      path: '/tech-analysis',
      redirect: { path: '/', hash: '#tech-analysis' }
    },
    {
      path: '/comparison',
      redirect: { path: '/', hash: '#comparison' }
    },
    {
      path: '/faq',
      redirect: { path: '/', hash: '#faq' }
    },
    {
      path: '/about',
      redirect: { path: '/', hash: '#about' }
    },
    // Catch-all redirect
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
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
