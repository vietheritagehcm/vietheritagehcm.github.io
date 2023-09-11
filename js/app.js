import ContentDistributor from "./utilities/content-distributor.js";
import BoxInteraction from "./utilities/box-interaction.js";
import Dropdown from "./utilities/dropdown.js";

class App {
    constructor() {
        const boxes = Array.from(document.querySelectorAll('.box'));

        this.boxes = boxes.map(box => new BoxInteraction(box));
        this.contentDistributor = new ContentDistributor("vi");
        this.dropdown = new Dropdown("#lang-dropdown", this.contentDistributor);

        this.update();
    }

    update() {
        this.boxes.forEach(box => box.update());
    }
}

export default App;