class AppNotify extends HTMLElement {
    
    constructor(){
        super();
        this.template = document.getElementById('app-notify');
        this.notify = document.importNode(this.template.content, true);
    }

    connectedCallback(){

        const target = document.getElementById('target');
        target.appendChild(this.notify);
    }

    attributeChangedCallback(name, oldVal, newVal){
        if(name === 'title'){
            this.notify.querySelector('.notify__title').innerHTML = newVal;
        };

        if(name === 'type'){
            this.notify.querySelector('.notify').classList.add(newVal);
        }
    }

    /**
     * Observa cuando hay un cambio en los atributos
     */
    static get observedAttributes(){
        return ['title', 'type'];
    }

}


window.customElements.define('app-notify', AppNotify);