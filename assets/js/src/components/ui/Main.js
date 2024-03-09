import { MainComponent, MainStyles } from "../../templates/MainTemplate.js";
import Component from "../model/Component.js";

class Main extends Component {
    template(){
        return MainStyles();
    };
    stylesCss(){
        return MainComponent();
    };
};

export default Main;