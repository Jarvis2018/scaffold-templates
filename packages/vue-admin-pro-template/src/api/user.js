import request from '@/utils/request'

export function getUseInfo (data) {
  return request({
    url: '/vue-admin-pro-template/login',
    method: 'post',
    data: data
  })
}
export function Logout (data) {
  return request({
    url: '/vue-admin-pro-template/logout',
    method: 'post',
    data: data
  })
}
