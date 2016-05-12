module.exports = {
  modifyWebpackConfig: function (config, env) {
    config.removeLoader('jpg')
    config.loader('jpg', {
      test: /\.(jpe?g)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
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
