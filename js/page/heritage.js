import debounce from "../helper/debounce.js";
import App from "../app.js";
import PostDistributor from "../utilities/post-distributor.js";

class Page {
    constructor() {
        this.heritage = document.querySelector("#heritage");
        this.app = new App("heritage", "vi");
        this.postDistributorHandle = new PostDistributor("vi", "heritage", this.heritage);

        this.update();
    }

    update() {
        console.log("resizing");
        this.app.update();
        this.postDistributorHandle.update();
    }
}

const page = new Page();

window.addEventListener("resize", debounce(() => {page.update();}))
window.addEventListener("unload", () => {window.removeEventListener("resize")});