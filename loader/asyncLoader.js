// 拿到源文件，替换里面的字符串

module.exports = function(source){
  console.log('++++++async+++++++');
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('webpack',this.query.name)
    callback(null, result);
  }, 1000);
}
