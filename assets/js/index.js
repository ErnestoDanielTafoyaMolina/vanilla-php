import BtnHello from "./src/components/BtnHello.js";
import Header from "./src/components/ui/Header.js";
import Main from "./src/components/ui/Main.js";
import Footer from "./src/components/ui/Footer.js";
import Aside from "./src/components/ui/Aside.js";

window.customElements.define("app-header", Header);
window.customElements.define("app-main", Main);
window.customElements.define("app-aside",Aside);
window.customElements.define("app-footer",Footer);
window.customElements.define("btn-hello", BtnHello);