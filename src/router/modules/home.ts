const Layout = () => import('@/layout/default/index.vue')

const homeRouter = {
  path: '/',
  name: 'root',
  component: Layout,
  redirect: '/home',
  meta: {
    icon: '',
    title: ''
  },
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        icon: '',
        title: ''
      }
    }
  ]
}

export default homeRouter
