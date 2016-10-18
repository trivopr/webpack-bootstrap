
require('../css/app.css');
require('jquery');
// import '~bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import {login} from './login';


var el = document.getElementsByClassName('txthello');

for (let i=0; i<el.length; i++) {
  el[i].style.color= 'green';
}

document.getElementById('logo').style.backgroundColor = 'gray';


login('admin', 'admin');
console.log('app.js');

