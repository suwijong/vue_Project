//适配
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
})


module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, // 关闭enlint语法检查
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    // port:8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
         }
        },
        '/wy':{
          target:'https://m.you.163.com',
          ws:true,
          changeOrigin:true,
          pathRewrite:{
            '^/wy':''
          }
      }
    }
  }
}
