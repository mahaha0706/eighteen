import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../components/LoginView.vue'),
  },
  {
    path: '/home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../components/HomeView.vue'),
  },
]

const router = new VueRouter({
  routes,
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
