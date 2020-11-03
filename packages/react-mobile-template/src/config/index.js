import { version } from '../../package.json'

const configs = {
  // 开发环境配置
  development: {
    baseServerUrl: 'http://xxx'
  },
  // 测试环境配置
  qa: {
    baseServerUrl: 'http://xxx'
  },
  // 生产环境配置
  production: {
    baseServerUrl: 'http://xxx'
  }
}

function getConfig (env) {
  if (!process.env.REACT_APP_TARGET) {
    console.warn('获取配置失败，检查：REACT_APP_TARGET')
    return
  }
  return {
    version,
    ...configs[env]
  }
}

export default getConfig(process.env.REACT_APP_TARGET)
