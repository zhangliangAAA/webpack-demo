const path = require('path')

module.exports = {
  // 打包入口
  entry: "./index.js",
  // 指定打包后的资源位置
  output: {
    path:path.resolve(__dirname,"./build"),
    filename: "test.js"
  }
}