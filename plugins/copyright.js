class CopyrightWebpackPlugin {
  constructor(params) {
    console.log('CopyrightWebpackPlugin---', params);
  }
  //配置plugin在什什么时刻进⾏行行
  apply(compiler) {
    //hooks.emit 定义在某个时刻
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'hello copy';
        },
        size: function() {
          return 20;
        },
      };
      cb();
    });

    //同步的写法
    //compiler.hooks.compile.tap("CopyrightWebpackPlugin", compilation => { // console.log("开始了了");
    //});
  }
}
module.exports = CopyrightWebpackPlugin;
