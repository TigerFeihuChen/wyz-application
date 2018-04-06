import BaseElement from './base-element.js'

export default class Input extends BaseElement {
    constructor(placeholder){
        super();
        this.placeholder = placeholder;
        this.value = '';
    }

    getValue(){
        return this.value;
    }

    buildElementString(){
        return `
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3" value="${this.value}">
                <label class="mdl-textfield__label" for="sample3">${this.placeholder}</label>
            </div>
        `;
    }
};
