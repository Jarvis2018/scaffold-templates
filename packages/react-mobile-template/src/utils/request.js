import Axios from 'axios'
import { Toast } from 'antd-mobile'
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

// 显示loading
function showLoading (show) {
  if (show) {
    Toast.loading('加载中...', 0)
  }
}
// 关闭loading
function closeLoading () {
  Toast.hide()
}

function setBaseUrl (url) {
  let baseUrl = ''
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return baseUrl
  }

  baseUrl = baseServerUrl

  return baseUrl
}

// 自定义header
function setHeaders (config) {}

//  请求拦截器
request.interceptors.request.use(function (config) {
  const { url, _showLoading = false } = config

  showLoading(_showLoading)

  // 根据url前缀设置对应的baseURL
  config.baseURL = setBaseUrl(url)

  setHeaders(config)

  return config
}, function (error) {
  closeLoading()

  Toast.offline('网络不佳，请稍后重试')

  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  const { data, config } = response

  closeLoading()

  // 是否显示错误信息
  if (data.code !== undefined && parseInt(data.code) !== 0 && (config._hideError !== true)) {
    Toast.offline(data.msg || '网络不佳，请稍后重试')
  }

  // 判断得到 {data: {}} 还是 data
  if (config._returnAll) {
    return data
  }
  return data.data
}, function (error) {
  closeLoading()

  Toast.offline('网络不佳，请稍后重试')
  return Promise.reject(error)
})

export default request
