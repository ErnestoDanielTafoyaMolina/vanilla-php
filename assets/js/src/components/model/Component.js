class Component extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    };
    connectedCallback(){
        this.componentAttributes();
        this.render();
        this.onInitComponent();
    };
    disconnectedCallback(){
        this.remove();
    };

    render(){
        this.shadowDOM.innerHTML = `
        ${this.stylesCss()}
        ${this.template()}
        `;
    };
    componentAttributes(){};
    stylesCss(){};
    template(){};
    onInitComponent(){};
};

export default Component;