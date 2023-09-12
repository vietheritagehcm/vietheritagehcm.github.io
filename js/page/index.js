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

document.addEventListener("resize", () => {page.update();})
document.addEventListener("unload", () => {document.removeEventListener("resize")});