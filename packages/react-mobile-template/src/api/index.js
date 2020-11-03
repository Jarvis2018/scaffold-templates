import request from '../utils/request'

// 登录
export function login (keywords) {
  return request({
    url: '/xxxx',
    method: 'post',
    data: keywords,
    _showLoading: true
  })
}
