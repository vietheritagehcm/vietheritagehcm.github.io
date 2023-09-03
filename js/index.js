import ContentDistributor from "./utilities/content-distributor.js";
import HeaderPadding from "./utilities/header-padding.js";
import BoxInteraction from "./utilities/box-interaction.js";

class App {
    constructor() {
        const navbarHeader = document.querySelector("header");
        const header1 = document.querySelector("#hero");
        const header2 = document.querySelector("#introduction");
        const boxes = Array.from(document.querySelectorAll('.box'));
        const populateContent = (lang) => {
            const contentDistributor = new ContentDistributor(lang);
            contentDistributor.update(lang)
        };

        this.headerPadding1 = new HeaderPadding(header1, navbarHeader, 8);
        this.headerPadding2 = new HeaderPadding(header2, navbarHeader, 0);
        this.boxes = boxes.map(box => new BoxInteraction(box));

        populateContent("vi");
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