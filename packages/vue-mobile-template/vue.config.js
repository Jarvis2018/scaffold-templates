const vConsolePlugin = require('vconsole-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

console.log(`构建环境：${process.env.NODE_ENV}；构建目标：${process.env.VUE_APP_TARGET}`)

module.exports = {
  publicPath: process.env.VUE_APP_PATH_NAME,
  outputDir: `./dist/${process.env.VUE_APP_PATH_NAME}`,
  productionSourceMap: process.env.VUE_APP_TARGET !== 'production',
  configureWebpack: config => {
    if (process.env.VUE_APP_TARGET === 'qa') {
      config.plugins.push(
        // eslint-disable-next-line new-cap
        new vConsolePlugin({
          filter: [],
          enable: true
        })
      )
    }
    if (process.env.VUE_APP_TARGET === 'production') {
      config.plugins.push(
        // 开启静态gzip
        new CompressionPlugin()
      )
    }
  }
}
