import HeaderPadding from "../utilities/header-padding.js"; //Page content
import App from "../app.js"; //Theme renderer

class Page {
    constructor() {
        const navbarHeader = document.querySelector("header");
        const header1 = document.querySelector("#hero");
        const header2 = document.querySelector("#introduction");
        
        this.app = new App();
        this.headerPadding1 = new HeaderPadding(header1, navbarHeader, 8);
        this.headerPadding2 = new HeaderPadding(header2, navbarHeader, 0);

        this.update();
    }

    update() {
        this.headerPadding1.update();
        this.headerPadding2.update();
        this.app.update();
    }
}

const page = new Page();

document.addEventListener("resize", () => {page.update();})
document.addEventListener("unload", () => {document.removeEventListener("resize")});