## webpack
webpack 是⼀一个模块打包⼯工具，可以识别出引⼊入模块的语法 ，早起的webpack只是个js模块的 打包⼯工具，现在可以是css，png，vue的模块打包⼯工具.

## loader
webpack是模块打包⼯工具，⽽而模块不不仅仅是js，还可以是css，图⽚片或者其他格式 但是webpack默认只知道如何处理理js模块，那么其他格式的模块处理理，和处理理⽅方式就需要loader了

## plugins
plugin 可以在webpack运⾏行行到某个阶段的时候，帮你做⼀一些事情，类似于⽣生命周期的概念

## 本地开发配置
1、安装： webpack-dev-server
2、配置 webpack.config.js
devServer: {
  contentBase: "./dist", 
  open: true, //打开默认浏览器
  port: 8081,
  // 设置代理解决跨域问题
  proxy: {
    "/api": {
      target: "http://localhost:9092"
    }
  },
},
3、本地解决跨域问题
devServer中增加proxy
4、线上解决跨域使用nginx转发

## 热更新HMR
HMR默认对css模块支持较好，对js某块需要额外处理。
处理方法：
1、强制刷新浏览器
devServer: {
  contentBase: "./dist",
  open: true, //打开浏览器
  //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
  hot:true, //热更新-->仅仅针对于css
  hotOnly: false, //true:js改变后浏览器不刷新，需要手动刷新；false(默认)：js更新保存后浏览器自动刷新
  port: 8081,
  // 设置代理解决跨域问题
  proxy: {
    "/api": {
      target: "http://localhost:9092"
    }
  },
},
2、不刷新浏览器时，监听模块变化
module.hot.accept('./a',()=> {
  console.log('a 有更新')
  a()
})