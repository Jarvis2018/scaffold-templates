module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    getApp: 'writable',
    wx: 'writable',
    App: 'writable',
    Page: 'writable',
    Component: 'writable',
    getCurrentPages: 'writable'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
