import App from "../app.js";
import PostDistributor from "../utilities/post-distributor.js";

class Page {
    constructor() {
        this.heritage = document.querySelector("#heritage");
        this.app = new App("heritage", "vi");
        this.postDistributorHandle = new PostDistributor("vi", "heritage");

        this.update();
    }

    update() {
        this.app.update();
        this.postDistributorHandle.update(this.heritage);
    }
}

const page = new Page();

document.addEventListener("resize", () => {page.update();})
document.addEventListener("unload", () => {document.removeEventListener("resize")});