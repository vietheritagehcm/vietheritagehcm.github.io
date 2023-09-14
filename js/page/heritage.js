import debounce from "../helper/debounce.js";
import App from "../app.js";
import PostMenuDistributor from "../utilities/post-menu-distributor.js";

class Page {
    constructor() {
        this.target = document.querySelector("#heritage");
        this.app = new App("heritage", "vi");
        this.postDistributorHandle = new PostMenuDistributor("vi", "heritage", this.target);

        this.update();
    }

    update() {
        this.app.update();
        this.postDistributorHandle.update();
    }
}

const page = new Page();

window.addEventListener("resize", debounce(() => {page.update();}))
window.addEventListener("unload", () => {window.removeEventListener("resize")});