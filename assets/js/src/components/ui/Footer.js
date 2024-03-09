import { FooterComponent, FooterStyles } from "../../templates/FooterTemplate.js";
import Component from "../model/Component.js";

class Footer extends Component {
    stylesCss(){
        return FooterStyles();
    };
    template(){
        return FooterComponent();
    };
};

export default Footer;