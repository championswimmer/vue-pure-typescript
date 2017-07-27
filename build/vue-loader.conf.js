var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var cssLoaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
})

var scriptLoaders = {
  ts: 'ts-loader!tslint-loader',
  js: 'babel-loader!eslint-loader'
}



module.exports = {
  loaders: Object.assign({}, cssLoaders, scriptLoaders),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  esModule: true
}
