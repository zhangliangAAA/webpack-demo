import a from './a'
import b from './b'

import img from './img/a.png'
import img2 from './img/th.jpeg'

import './index.css'

import axios from 'axios'
axios.get('/api/info').then(res=>{
  console.log(res)
})

a()
b()

var image = new Image();
image.src = img;
image.classList.add('pic')
document.querySelector('#root').append(image)

console.log('eee',img);


function say(){
  console.log('hello');
}
say();