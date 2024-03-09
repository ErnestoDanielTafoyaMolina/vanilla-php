import { BtnHelloStyles, BtnHelloTemplate } from "../templates/BtnHelloTemplate.js";
import Component from "./model/Component.js";

class BtnHello extends Component {
    onInitComponent() {
        this.$buttonElement = this.shadowDOM.querySelector("button");
        this.$buttonElement = this.addEventListener('click', this.onClickBtn.bind(this));
    }
    onClickBtn(){
        this.dispatchEvent(new CustomEvent("hello-click", { detail:"has presionado el boton hello" }));
    }
    template(){
        return BtnHelloTemplate( this.attributes.title.value );
    }
    stylesCss(){
        return BtnHelloStyles();
    }
    componentAttributes(){
        const attributesMapping = [
            "title"
        ];
        attributesMapping.forEach(key => {
            if(!this.attributes[key]){
                this.attributes[key] = { value:'' }
            };
        });
    };
};

export default BtnHello;