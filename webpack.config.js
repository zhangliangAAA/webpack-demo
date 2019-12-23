const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // 打包入口
  entry: "./index.js",
  mode: 'development',
  // dev默认开启
  devtool:"cheap-module-eval-source-map",//开发环境推荐
  // devtool:"cheap-module-source-map"
  // 指定打包后的资源位置
  output: {
    // 公共路径设置
    // publicPath: "https://baidu.com",
    path:path.resolve(__dirname,"./build"),
    filename: "index.js"
  },
  devServer: {
    contentBase: "./dist",
    open: true, //打开浏览器
    //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
    // hot:true, //热更新
    port: 8081,
    // 设置代理解决跨域问题
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    },
  },
  //默认只编译js
  module:{
    //遇到不认识的某块写在此
    rules:[
      {
        test: /\.jpeg|png$/,
        use: {
          loader: "url-loader",
          options: {
            // name 是打包前的名称，ext是打包前的模块格式
            name: '[name]_[hash].[ext]',
            outputPath: "imgs",
            limit: 2048
          }
        }
      },
      {
        test: /\.css$/,
        //MiniCssExtractPlugin.loader单独将css打包成对应文件
        use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader"] 
      },
      {
        test: /\.scss$/,//从后往前执行
        //style-loader将打包后的css以标签形式插入html中
        use: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  plugins:[new htmlWebpackPlugin({
    template: "./index.html",
    // title: 'my-title'
  }), 
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name].css"
  })
]
}