// router/index.ts (or .js)
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/Home.vue'
import ProjectPage from '@/pages/Project.vue'
import AboutPage from '@/pages/About.vue'

import POSWebsite from '@/pages/ProjectDetail/02-ProjectDetail.vue'

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
      path: '/projects',
      name: 'project',
      component: ProjectPage,
    },
    { path: '/projects/pos-website', name: 'pos-website', component: POSWebsite },
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
