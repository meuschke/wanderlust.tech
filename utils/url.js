import url from 'url'

exports.absolutePath = function(path){

  const URI = url.parse(path)

  return "/" + URI.pathname.replace(/^\//, "")

}
