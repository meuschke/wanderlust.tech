module.exports = {
  modifyWebpackConfig: function (config, env) {
    config.removeLoader('jpg')
    config.loader('jpg', {
      test: /\.jpg$/,
      loader: 'url?limit=10000!img?minimize&optimizationLevel=7&progressive=true'
    }
    )
    return config
  },
  rewritePath: function (parsedPath) {
    if (parsedPath.name === 'index_en') {
      return '/en/'
    }
    return undefined
  }
}
