import Button from './elements/button.js';
import TitleBar from './elements/title-bar.js';

let btn = new Button('Click me');
btn.appendToElement(document.body);

let linksObj = [
    {url:'xxx', text: 'ABC'},
    {url:'xxx', text: 'DEF'},
    {url:'xxx', text: 'GHK'},
    {url:'xxx', text: 'LMN'},
];
let tbar = new TitleBar('WYZ', linksObj);
tbar.appendToElement(document.body);