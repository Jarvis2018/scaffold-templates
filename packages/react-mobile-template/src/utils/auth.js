export function getItem (key) {
  return sessionStorage.getItem(key)
}

export function setItem (key, value) {
  if (!value && parseInt(value) !== 0) {
    return
  }
  sessionStorage.setItem(key, value)
}

export function removeItem (key) {
  sessionStorage.removeItem(key)
}
