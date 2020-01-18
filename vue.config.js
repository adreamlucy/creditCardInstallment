const port = '11100'
module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: true,
  transpileDependencies: [],
  devServer: {
    port,
    open: true,
    host: '0.0.0.0',
    https: false,
    hotOnly: false, // 热更新
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: '127.0.0.1',
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/styles/_mixin.scss";
           @import "@/assets/styles/_common.scss";
            `
        }
     }
  }
}