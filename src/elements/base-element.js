export default class BaseElement {
    constructor(){
        this.element = null;
    }

    appendToElement(parentNode){
        this.createElement();
        parentNode.append(this.element);
    }

    createElement(){
        var div = document.createElement('div');
        div.innerHTML = this.buildElementString().trim();
        this.element = div.firstChild;
    }

    buildElementString(){
        throw 'base class must overwrite this method';
    }
}