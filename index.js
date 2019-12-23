import './index.css';
import a from './a'
import b from './b'

a()
b()

if(module.hot){
  module.hot.accept('./a',()=> {
    console.log('a 有更新')
    a()
  })
}

var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);
btn.onclick = function() {
  var div = document.createElement('div');
  console.log('1');
  div.innerHTML = 'item';
  document.body.appendChild(div);
};
