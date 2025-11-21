import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'



// 无权限认证
export const constantRoutes = [

  // 登陆
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // 错误页
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 仪表盘
  {
    redirect: 'noRedirect',
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: '仪表盘',
      component: () => import('@/views/Dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// 移除异步路由，只保留基础功能

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
