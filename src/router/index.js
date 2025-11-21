import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'

// No permission authentication
export const constantRoutes = [

  // Login
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // Error page
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // Dashboard
  {
    redirect: 'noRedirect',
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// Remove async routes, keep only basic functionality

const createRouter = () => new Router({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
