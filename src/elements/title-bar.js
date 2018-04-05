import BaseElement from './base-element.js';

export default class TitleBar extends BaseElement {
    constructor(title, linksObj){
        super();
        this.title = title;
        this.linksObj = linksObj;
    }

    getLinks(){
        let links = '';
        for(let obj of this.linksObj){
            links += `<a class="mdl-navigation__link" href="${obj.url}">${obj.text}</a>`;
        }

        return links;
    }

    buildElementString(){
        let links = this.getLinks();
        return `
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">${this.title}</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        ${links}
                    </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.title}</span>
                    <nav class="mdl-navigation">
                        ${links}
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"></div>
                </main>
            </div>
        `;
    }
}