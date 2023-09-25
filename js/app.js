import ContentDistributor from "./utilities/content-distributor.js";
import BoxInteraction from "./utilities/box-interaction.js";
import setPadding from "./helper/header-padding.js";
import Dropdown from "./utilities/dropdown.js";

class App {
    constructor(page, defaultLang) {
        const boxes = Array.from(document.querySelectorAll('.box'));

        this.boxes = boxes.map(box => new BoxInteraction(box));
        this.contentDistributorHandler = new ContentDistributor(defaultLang, page);
        this.dropdown = new Dropdown("#lang-dropdown", [this.contentDistributorHandler]);

        this.padding = () => {
            const header = document.querySelector("header");
            const sections = document.querySelectorAll("section");
            for (const section of sections) {
                setPadding(section, header);
            }
        }

        this.update();
    }

    update() {
        this.boxes.forEach(box => box.update());
        this.contentDistributorHandler.update();
        this.padding();
    }
}

export default App;