const config = require('./config')
const proxyPath = config.proxy_path

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3232,
    disableHostCheck: true,
    proxy: {
      '/websocket': {
        target: proxyPath,
        ws: true
      }
    }
  }
}
