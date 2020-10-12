import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = () => import('../views/home.vue')
const cart = () => import('../views/cart/cart.vue')
const fenlei = () => import('../views/fenlei/fenlei.vue')
const profile = () => import('../views/profile/profile.vue')
const detail = () => import('../views/detail/detail.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
},
  {
    path: '/cart',
    component: cart
  }, 
  {
    path: '/fenlei',
    component: fenlei
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router