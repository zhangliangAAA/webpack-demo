// 拿到源文件，替换里面的字符串

module.exports = function(source){
  console.log('++++++my-loader+++++++');
  return source.replace('webpack','GG')
  
}
