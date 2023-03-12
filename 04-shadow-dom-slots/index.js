class MyParagraph extends HTMLElement {
    
    constructor(){
        super();
        // this.template = document.getElementById('app-notify');
        // this.notify = document.importNode(this.template.content, true);
        const template = document.getElementById('my-paragraph');
        const templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }

    // connectedCallback(){

    //     const target = document.getElementById('target');
    //     target.appendChild(this.notify);
    // }

    

}


window.customElements.define('my-paragraph', MyParagraph);