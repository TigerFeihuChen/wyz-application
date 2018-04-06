import Button from './elements/button.js';
import TitleBar from './elements/title-bar.js';
import Input from './elements/input.js';

let btn = new Button('Click me');
btn.appendToElement(document.body);

let tbar = new TitleBar('SNEAKERS HEAD', 'Air Jordan, Nike, Adidas, Yeezy'.split(', '));
tbar.appendToElement(document.body);

let input = new Input('Please enter your name');
input.appendToElement(document.body);

// setInterval(function(){
//     console.log(input.getValue());
// }, 2000);
