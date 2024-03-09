import { HeaderStyles, HeaderComponent } from "../../templates/HeaderTemplate.js";
import Component from "../model/Component.js";

class Header extends Component {
    template(){
        return HeaderStyles();
    };
    stylesCss(){
        return HeaderComponent();
    };
}

export default Header;