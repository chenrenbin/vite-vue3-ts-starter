import type { App } from 'vue'
import {
  RouteRecordRaw,
  Router,
  createWebHistory,
  createRouter
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/account/login.vue'),
    meta: {
      title: '登录页'
    }
  }
]

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
