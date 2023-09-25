import App from "../app.js";
import debounce from "../helper/debounce.js";
import PostContentDistributor from "../utilities/post-content-distributor.js";

class Page {
    constructor() {
        this.target = document.querySelector("div.post-page");
        this.app = new App(`${this.target.id}`, "vi");
        this.post = new PostContentDistributor("vi", `${this.target.id}`, this.target);
        this.app.dropdown.contentDistributors.push(this.post);
    }

    update() {
        this.app.update();
    }
}

const page = new Page();

window.addEventListener("resize", debounce(() => {page.update();}));
window.addEventListener("unload", () => {window.removeEventListener("resize");});
