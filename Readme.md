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

## Babel处理ES6
1、安装 npm i babel-loader @babel/core @babel/preset-env -D
//babel-loader是webpack 与 babel的通信桥梁，不会做把es6转成es5的工作，这部分工作需要用到 @babel/preset-env来做
//@babel/preset-env里包含了es6转es5的转换规则

2、安装  npm install --save @babel/polyfill
@babel/polyfill，把es的新特性都装进 来，来弥补低版本浏览器中缺失的特性

3、优化@babel/polyfill，即按需加载
@babel/polyfill：以全局变量的方式注入进来的。eg:windows.Promise，它会造成全局对象的污染
修改Webpack.config.js
{ test: /\.js$/, 
  exclude: /node_modules/, 
  use: {
    loader:"babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1"
            },
            useBuiltIns: "usage"//按需注入，实验性的插件 }
          } 
        ]
      ]
    }
  }
},

4、@babel/plugin-transform-runtime 进一步优化
优点：不会造成全局污染
将 presets 替换成 plugins: ["@babel/plugin-transform-runtime"]

综上：
useBuiltIns 选项是 babel 7 的新功能，这个选项告诉 babel 如何配置 @babel/polyfill 。 它有三个参数可 以使用: 1entry: 需要在 webpack 的入口文件里 import "@babel/polyfill" 一次。 babel 会根据你的使用情 况导入垫片，没有使用的功能不会被导入相应的垫片。 2usage: 不需要 import ，全自动检测，但是要安装@babel/polyfill 。(试验阶段) 3false: 如果你 import "@babel/polyfill" ，它不会排除掉没有使用的垫 片，程序体积会庞大。(不推荐)
请注意: usage 的行为类似 babel-transform-runtime，不会造成全局污染，因此也会不会对类似 Array.prototype.includes() 进行 polyfill。

另外：可以新建 .babelrc 把options部分移入到该文件中
