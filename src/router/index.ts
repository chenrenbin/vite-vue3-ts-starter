import type { App } from 'vue'
import {
  RouteRecordRaw,
  Router,
  createWebHistory,
  createRouter
} from 'vue-router'
const Layout = () => import('@/layout/account/index.vue')

const modules = import.meta.globEager('./**/*.ts')
const routeModules: Array<RouteRecordRaw> = []
Object.keys(modules).forEach(key => {
  routeModules.push(modules[key].default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/account',
    component: Layout,
    redirect: '/account/login',
    children: [
      {
        path: '/account/login',
        component: () => import('@/views/account/login.vue'),
        meta: {
          title: '登录页'
        }
      }
    ]
  }
]

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes.concat(routeModules)
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
