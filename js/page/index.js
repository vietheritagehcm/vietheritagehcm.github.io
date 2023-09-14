import App from "../app.js"; //Theme renderer

class Page {
    constructor() {     
        this.app = new App("index", "vi");

        this.update();
    }

    update() {
        this.app.update();
    }
}

const page = new Page();

window.addEventListener("resize", () => {page.update();})
window.addEventListener("unload", () => {window.removeEventListener("resize")});