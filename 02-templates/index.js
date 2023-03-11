class AppError extends HTMLElement {
    
    constructor(){
        super();
        this.TEMPLATE = document.getElementById('app-error');

    }

    connectedCallback(){
        const target = document.getElementById('target');

        const imported = document.importNode(this.TEMPLATE.content, true);
        target.appendChild(imported);
    }

}


window.customElements.define('app-error', AppError);