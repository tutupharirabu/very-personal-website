// router/index.ts (or .js)
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/Home.vue'
import WorkPage from '@/pages/Work.vue'
import AboutPage from '@/pages/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { transition: 'fade' },
    },
    {
      path: '/work',
      name: 'work',
      component: WorkPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: { transition: 'slide-right' },
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
