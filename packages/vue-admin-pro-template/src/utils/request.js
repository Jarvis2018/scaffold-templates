import Axios from 'axios'
import { Notification, Loading } from 'element-ui'
import router from '@/router'
import { getToken } from './auth'
import config from '../config/index'

const { baseServerUrl } = config

Axios.defaults.withCredentials = true

/**
 * config 选项说明：
 * _showLoading: true   是否显示loading 默认不显示
 * _returnAll: true    （状态码为200）返参是否返回全部信息，默认不返回，只返回data.data
 * _hideError: true     是否隐藏接口中返回的错误信息，默认显示后端的错误信息
 * @type {AxiosInstance}
 */

const request = Axios.create({
  timeout: 10000
})

let toast = null
// 显示loading
function showLoading (show) {
  if (show) {
    toast = Loading.service({
      lock: true,
      spinner: 'el-icon-loading',
      text: '加载中...'
    })
  }
}
// 关闭loading
function closeLoading (toast) {
  if (toast) {
    toast.close()
  }
}

function setBaseUrl (url) {
  let baseUrl = ''
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return baseUrl
  }

  baseUrl = baseServerUrl

  return baseUrl
}

// 设置自定义请求头
function setHeaders (config) {
  if (getToken()) {
    config.headers['X-Token'] = getToken()
  }
}

//  请求拦截器
request.interceptors.request.use(function (config) {
  const { url, _showLoading = false } = config

  showLoading(_showLoading)

  setHeaders(config)

  // 根据url前缀设置对应的baseURL
  config.baseURL = setBaseUrl(url)
  return config
}, function (error) {
  closeLoading(toast)

  Notification.error({
    title: '错误',
    message: '网络不佳，请稍后重试'
  })

  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  const { data, config } = response

  closeLoading(toast)

  // 是否显示错误信息
  if (parseInt(data.status) !== 1 && (config._hideError !== true)) {
    Notification.error({
      title: '错误',
      message: data.message || '网络不佳，请稍后重试'
    })
  }

  // 判断得到 {data: {}} 还是 data
  if (config._returnAll) {
    return data
  }
  return data.data
}, function (error) {
  closeLoading(toast)

  const { response = {} } = error
  const { status } = response

  if (status === 401) {
    Notification.error({
      title: '错误',
      message: error.message || '未登录或登录已过期，请重新登录。'
    })
    router.push({ path: '/login' })
    return Promise.reject(error)
  }

  Notification.error({
    title: '错误',
    message: '网络不佳，请稍后重试'
  })
  return Promise.reject(error)
})

export default request
