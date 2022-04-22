const Layout = () => import('@/layout/account/index.vue')

const accountRouter = {
  path: '/account',
  name: 'account',
  component: Layout,
  redirect: '/account/login',
  meta: {
    icon: '',
    title: ''
  },
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/account/login.vue'),
      meta: {
        icon: '',
        title: ''
      }
    }
  ]
}

export default accountRouter
