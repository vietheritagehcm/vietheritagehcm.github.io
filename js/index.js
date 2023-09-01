import Navbar from "./navbar.js";
import HeaderPadding from "./header-padding.js";
import BoxInteraction from "./box-interaction.js";

class App {
    constructor() {
        const navbarHeader = document.querySelector("header");
        const header1 = document.querySelector("#hero");
        const header2 = document.querySelector("#introduction");
        const boxes = Array.from(document.querySelectorAll('.box'));
        const navbarContent = document.querySelector("#main-nav");

        this.headerPadding1 = new HeaderPadding(header1, navbarHeader, 8);
        this.headerPadding2 = new HeaderPadding(header2, navbarHeader, 0);
        this.boxes = boxes.map(box => new BoxInteraction(box));
        this.navbarContent = new Navbar(navbarContent);

        this.update();
    }

    update() {
        this.headerPadding1.update();
        this.headerPadding2.update();
        this.boxes.forEach(box => box.update());
    }
}

const app = new App();

window.addEventListener("resize", () => app.update());