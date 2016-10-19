
require('../css/app.css');
require('../css/news.scss');

import {login} from './login';


var el = document.getElementsByClassName('txthello');

$('.panel').css('color', 'pink');

for (let i=0; i<el.length; i++) {
  el[i].style.color= 'green';
}

document.getElementById('logo').style.backgroundColor = 'gray';


login('admin', 'admin');
console.log('app.js');

