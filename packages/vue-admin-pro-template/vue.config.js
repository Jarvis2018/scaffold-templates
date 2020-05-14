const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    // production环境 开启Gzip
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css)(\?.*)?$/i,
          threshold: 10240
        }))
    }
  },
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
