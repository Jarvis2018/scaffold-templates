const TokenKey = 'vue-admin-pro-template'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (value) {
  localStorage.setItem(TokenKey, value)
}

export function removeToken () {
  localStorage.removeItem(TokenKey)
}
