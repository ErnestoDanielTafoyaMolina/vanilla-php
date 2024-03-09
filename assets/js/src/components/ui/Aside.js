
import { AsideComponent, AsideStyles } from "../../templates/AsideTemplate.js";
import Component from "../model/Component.js";

class Aside extends Component {
    stylesCss(){
        return AsideStyles();
    };
    template(){
        return AsideComponent();
    };
};

export default Aside;