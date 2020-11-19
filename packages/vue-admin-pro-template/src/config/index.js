import { version } from '../../package'

const configs = {
  // 开发环境配置
  development: {
    baseServerUrl: ''
  },
  // 测试环境配置
  qa: {
    baseServerUrl: ''
  },
  // 生产环境配置
  production: {
    baseServerUrl: ''
  }
}

function getConfig (env) {
  if (!process.env.VUE_APP_TARGET) {
    console.warn('获取配置失败，检查：VUE_APP_TARGET')
    return
  }
  return {
    version,
    ...configs[env]
  }
}

export default getConfig(process.env.VUE_APP_TARGET)
