module.exports = {
  modifyWebpackConfig: function (config, env) {
    console.log("Change Image Loader")
    config.removeLoader('jpg')
    config.loader('jpg', function(cfg) {
      cfg.test = /\.jpg$/i
      cfg.loader = 'file?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack?optimizationLevel=3&interlaced=false'
      return cfg
    })
    // png
    config.removeLoader('png')
    config.loader('png', function(cfg) {
      cfg.test = /\.png$/i
      cfg.loader = 'file?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack?optimizationLevel=3&interlaced=false'
      return cfg
    })
    return config
  },
  rewritePath: function (parsedPath) {
    if (parsedPath.name === 'index_en') {
      return '/en/'
    }
    return undefined
  }
}
