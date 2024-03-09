import BtnHello from "./src/components/BtnHello.js";
import Header from "./src/components/ui/Header.js";
import Main from "./src/components/ui/Main.js";
window.customElements.define("app-main", Main)
window.customElements.define("app-header", Header)
window.customElements.define("btn-hello", BtnHello);