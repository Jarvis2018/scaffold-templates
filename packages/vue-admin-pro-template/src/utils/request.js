import Axios from 'axios'
import { Notification } from 'element-ui'
import router from '@/router'
import { getToken } from './auth'
// 自定义http code 对应的信息
const httpCode = {
  401: {
    message: '未登录或登录已过期，请重新登录。'
  },
  403: {
    message: '没有权限，访问被禁止。'
  },
  404: {
    message: '发出的请求针对的是不存在的记录，服务器没有进行操作。'
  },
  500: {
    message: '服务器发生错误，请检查服务器。'
  }
}

function setBaseUrl (url) {
  let baseUrl = ''
  const preUrl = url.split('/')[1]
  switch (preUrl) {
    case 'vue-admin-pro-template':
      baseUrl = process.env.VUE_APP_BASE_API
      break
    case 'test':
      baseUrl = process.env.VUE_APP_BASE_API2
      break
    default:
      baseUrl = ''
      break
  }
  return baseUrl
}

const request = Axios.create({
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  let { url } = config
  // 根据url前缀设置对应的baseURL
  config.baseURL = setBaseUrl(url)

  // 设置自定义请求头
  if (getToken()) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response
}, error => {
  const { response = {} } = error
  const { status } = response
  // 如果有自定义则有限显示自定义，否则显示系统返回信息
  const errorMessage = httpCode[status] ? httpCode[status]['message'] : error.message

  if (status === 401) {
    Notification.error({
      title: '错误',
      message: errorMessage
    })
    router.push({ path: '/login' })
    return Promise.reject(error)
  }

  if (status === 404) {
    Notification.error({
      title: '错误',
      message: errorMessage
    })
    return Promise.reject(error)
  }

  if (status === 500) {
    Notification.error({
      title: '错误',
      message: errorMessage
    })
    return Promise.reject(error)
  }
  Notification.error({
    title: '错误',
    message: errorMessage
  })
  return Promise.reject(error)
})

export default request
