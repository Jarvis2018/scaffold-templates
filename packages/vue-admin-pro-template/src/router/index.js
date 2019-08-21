import Vue from 'vue'
import Router from 'vue-router'
const BasicLayout = () => import(/* webpackChunkName: "BasicLayout" */ '@/layouts/BasicLayout.vue')
const UserLayout = () => import(/* webpackChunkName: "UserLayout" */ '@/layouts/UserLayout.vue')
Vue.use(Router)

const routes = [
  {
    path: '/404',
    component: UserLayout,
    hidden: true,
    children: [
      {
        path: '',
        name: 'not-find',
        component: () => import('@/views/404.vue')
      }
    ]
  },

  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/user/Register.vue')
      }
    ]
  },

  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    meta: { title: 'Home', icon: 'dashboard' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: { title: 'Dashboard' }
      },
      {
        path: 'about3',
        name: 'about3',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        meta: { title: 'About3' }
      }
    ]
  },
  {
    path: '/about',
    component: BasicLayout,
    children: [
      {
        path: '',
        name: 'about',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        meta: { title: 'About', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  routes
})
