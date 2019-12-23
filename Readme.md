## webpack
webpack 是⼀一个模块打包⼯工具，可以识别出引⼊入模块的语法 ，早起的webpack只是个js模块的 打包⼯工具，现在可以是css，png，vue的模块打包⼯工具.

## loader
webpack是模块打包⼯工具，⽽而模块不不仅仅是js，还可以是css，图⽚片或者其他格式 但是webpack默认只知道如何处理理js模块，那么其他格式的模块处理理，和处理理⽅方式就需要loader了

## plugins
plugin 可以在webpack运⾏行行到某个阶段的时候，帮你做⼀一些事情，类似于⽣生命周期的概念

## 本地热更新技术
1、安装： webpack-dev-server
2、配置 webpack.config.js
devServer: {
  contentBase: "./dist",
  open: true,
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
