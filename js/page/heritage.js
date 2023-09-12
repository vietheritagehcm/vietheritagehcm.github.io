import App from "../app.js";

class Page {
    constructor() {
        const heritage = document.querySelector("#heritage");
        const documentFragment = document.createDocumentFragment();

        this.app = new App();
    }
}

const page = new Page();

document.addEventListener("resize", () => {page.update();})
document.addEventListener("unload", () => {document.removeEventListener("resize")});