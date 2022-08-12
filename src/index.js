import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe

    return element;
}
  
  document.body.appendChild(component());