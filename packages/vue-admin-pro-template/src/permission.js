import router from '@/router'
import { getToken } from './utils/auth'

const whiteList = ['/user/login', '/user/register', '/404'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/user/login')
    }
  }
})
