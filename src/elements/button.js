import BaseElement from './base-element.js';

export default class Button extends BaseElement {
    constructor(text){
        super();
        this.text = text;
    }

    buildElementString(){
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            ${this.text}
            </button>
        `;
    }
}