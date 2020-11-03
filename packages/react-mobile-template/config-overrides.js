// eslint-disable-next-line no-unused-vars
const { override, fixBabelImports, setWebpackPublicPath, addWebpackPlugin, addPostcssPlugins, getBabelLoader } = require('customize-cra')
const paths = require('react-scripts/config/paths')
const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin')

console.log(`构建环境：${process.env.NODE_ENV}；构建目标：${process.env.REACT_APP_TARGET}`)

// production 环境禁止sourcemap
const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}

// 修改构建目录
const fixOutputPath = () => config => {
  paths.appBuild = path.join(path.dirname(paths.appBuild), `dist${process.env.PUBLIC_URL}`)
  config.output.path = paths.appBuild
  return config
}

// 修改entry
const fixEntry = () => config => {
  config.entry = ['./src/index.js']
  return config
}

/**
 * 获取部署目录
 * 如果需要部署到cdn，可添加如下配置：setWebpackPublicPath(getPublicPath())
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
const getPublicPath = () => {
  if (process.env.REACT_APP_TARGET === 'production') {
    // CDN 路径
    return `XXX${process.env.PUBLIC_URL}`
  }
}

/**
 * @see https://github.com/gaoxiaoliangz/react-scoped-css/issues/12
 */
const addScopedCSS = () => (webpackConfig, env) => {
  const addScopedCssLoader = (targetRule) => {
    const rules = targetRule.use || targetRule.loader

    let cssLoaderIndex = -1
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i]
      if (rule.loader && rule.loader.includes('css-loader')) {
        cssLoaderIndex = i
        break
      }
    }

    if (cssLoaderIndex !== -1) {
      const scopedCssRule = { loader: require.resolve('scoped-css-loader') }
      rules.splice(cssLoaderIndex + 1, 0, scopedCssRule)
    } else {
      console.log('no css-loader found')
    }
  }

  // add babel-plugin-react-scoped-css
  const loader = getBabelLoader(webpackConfig)
  loader.options.plugins.push(require.resolve('babel-plugin-react-scoped-css'))

  // add scoped-css-loader
  const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf)
  if (!oneOfRule) {
    return console.log(
      `Can't find a 'oneOf' rule under module.rules in the ${env} webpack config!`,
      'webpack+rules+oneOf'
    )
  }

  const cssRule = oneOfRule.oneOf.find(
    (rule) => rule.test &&
      rule.test.toString().includes('.css$') &&
      rule.test.toString().indexOf('.module') === -1
  )
  if (!cssRule) {
    console.log(
      `Can't find the webpack rule to match css files in the ${env} webpack config!`
    )
  } else {
    addScopedCssLoader(cssRule)
  }

  const sassRule = oneOfRule.oneOf.find(
    (rule) => rule.test &&
      rule.test.toString().includes('scss|sass') &&
      rule.test.toString().indexOf('.module') === -1
  )
  if (!sassRule) {
    console.log(
      `Can't find the webpack rule to match scss/sass files in the ${env} webpack config!`
    )
  } else {
    addScopedCssLoader(sassRule)
  }

  return webpackConfig
}

module.exports = override(
  fixEntry(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  rewiredMap(),
  fixOutputPath(),
  addWebpackPlugin(
    // eslint-disable-next-line new-cap
    new vConsolePlugin({
      enable: process.env.REACT_APP_TARGET === 'qa'
    })
  ),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      viewportWidth: 375
    })
  ]),
  addScopedCSS()
)
