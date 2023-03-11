class HelloWorld extends HTMLElement {
    
    constructor(){
        super();

        this.gretting = 'Hola, qué tal';
    }

    /**
     * El componente se ha montado
     */
    connectedCallback(){
        const bold = document.createElement('strong');
        bold.innerHTML = this.gretting;
        this.appendChild(bold);
        console.log('Componente conectado');
    }

    /**
     * El componente se ha montado/desconectado
     */
    disconnectedCallback(){
        console.log('Componente desconectado');
    }

    /**
     * Se invoca cada vez que un atributo se añade, se elimina o cambia
     */
    attributeChangedCallback(name, oldVal, newVal){
        if(name === 'name'){
            this.gretting = `${this.gretting} ${newVal}`;
        };

        console.log(`${name} ha cambiado de ${oldVal} a ${newVal}`);
    }

    /**
     * Observa cuando hay un cambio en los atributos
     */
    static get observedAttributes(){
        return ['name'];
    }


}


window.customElements.define('hello-world', HelloWorld);