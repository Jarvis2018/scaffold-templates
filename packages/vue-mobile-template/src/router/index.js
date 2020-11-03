import Vue from 'vue'
import VueRouter from 'vue-router'
import { setDocumentTitle } from '../utils/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    meta: { name: '首页', scrollPosition: { x: 0, y: 0 } },
    props: (route) => ({ query: route.query }),
    component: () => import('../views/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.VUE_APP_PATH_NAME,
  routes,
  scrollBehavior (to) {
    const { scrollPosition = {} } = to.meta
    return scrollPosition
  }
})

router.beforeEach((to, form, next) => {
  const { name } = to.meta
  if (name) {
    setDocumentTitle(name)
  }
  next()
})

export default router
