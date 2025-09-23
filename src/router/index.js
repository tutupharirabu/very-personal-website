// router/index.ts (or .js)
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/Home.vue'
import ProjectPage from '@/pages/Project.vue'
import AboutPage from '@/pages/About.vue'

import BTPv1Website from '@/pages/ProjectDetail/01-ProjectDetail.vue'
import POSWebsite from '@/pages/ProjectDetail/02-ProjectDetail.vue'
import ArcadiaWebsite from '@/pages/ProjectDetail/03-ProjectDetail.vue'
import BTPv2Website from '@/pages/ProjectDetail/04-ProjectDetail.vue'

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
    { path: '/projects/spacerent-btp-v1', name: 'spacerent-btp-v1', component: BTPv1Website },
    { path: '/projects/pos-website', name: 'pos-website', component: POSWebsite },
    {
      path: '/projects/iot-analytics-platform',
      name: 'iot-analytics-platform',
      component: ArcadiaWebsite,
    },
    { path: '/projects/spacerent-btp-v2', name: 'spacerent-btp-v2', component: BTPv2Website },
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
