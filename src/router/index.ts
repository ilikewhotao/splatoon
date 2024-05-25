import { useRouterStore } from '@/stores/router'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('@/views/RecordView.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/ResultView.vue')
    }
  ]
})

router.beforeEach(to => {
  const routerStore = useRouterStore()
  routerStore.setRouter(to.name as string)
})

export default router
