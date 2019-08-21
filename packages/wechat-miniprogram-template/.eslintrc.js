module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    getApp: "writable",
    wx: "writable",
    App: "writable",
    Page: "writable",
    Component: "writable"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    eqeqeq: "off"
  }
}
