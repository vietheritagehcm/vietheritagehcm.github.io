class HeaderPadding {
    constructor(targetElement, headerElement, padding) {
        this.target = targetElement;
        this.header = headerElement;
        this.padding = padding;
    }

    setPadding() {
        const headerHeight = parseInt(window.getComputedStyle(this.header).height.match("[0-9]*")[0]);
        this.target.style.paddingBlockStart = `${this.padding * 16 + headerHeight}px`;
    }

    update() {
        this.setPadding();
    }
}

class BoxInteraction {
    constructor(element) {
        this.element = element;
        this.content = this.element.querySelector(".box-content");
        this.button = this.element.querySelector("a[type=button][aria-controls=box-content]");
        
        this.buttonExpand = document.createElement("span");
        this.buttonCollapse = document.createElement("span");
        
        const expandedText = "Xem thêm"; //Simulate return value from API. If use API then await fetch().
        const collapsedText = "Ẩn bớt";
        this.buttonExpand.textContent = expandedText;
        this.buttonCollapse.textContent = collapsedText;
        this.buttonExpand.classList.add("box-button-expand");
        this.buttonCollapse.classList.add("box-button-collapse");

        const fragment = document.createDocumentFragment(); //Use fragment to speed up appendChild process
        fragment.appendChild(this.buttonExpand);
        fragment.appendChild(this.buttonCollapse);
        this.button.appendChild(fragment);

        this.button.addEventListener('click', this.toggleButton.bind(this));
        this.update();
    }

    displayButton() {
        if (this.content.scrollHeight > this.content.clientHeight) {
            this.button.style.display = this.buttonExpand.style.display = 'inline';
            this.buttonCollapse.style.display = 'none';
        } else {
            this.button.style.display = 'none';
        }
    }

    toggleButton() {
        if (this.content.ariaExpanded === "false") {
            this.content.ariaExpanded = "true";
            [this.buttonExpand.style.display, this.buttonCollapse.style.display] = [this.buttonCollapse.style.display, this.buttonExpand.style.display];
        } else {
            this.content.ariaExpanded = "false";
            [this.buttonExpand.style.display, this.buttonCollapse.style.display] = [this.buttonCollapse.style.display, this.buttonExpand.style.display];
        }
    }

    update() {
        this.displayButton();
    }
}

class App {
    constructor() {
        const navbar = document.querySelector("header");
        const header1 = document.querySelector("#hero");
        const header2 = document.querySelector("#introduction");
        const boxes = Array.from(document.querySelectorAll('.box'));

        this.headerPadding1 = new HeaderPadding(header1, navbar, 8);
        this.headerPadding2 = new HeaderPadding(header2, navbar, 0);
        this.boxes = boxes.map(box => new BoxInteraction(box));

        this.update();
    }

    update() {
        this.headerPadding1.update();
        this.headerPadding2.update();
        this.boxes.forEach(box => box.update());
    }
}

const app = new App();

window.addEventListener("resize", () => app.update());