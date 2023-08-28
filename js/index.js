class HeaderPadding {
    constructor(targetElement, headerElement) {
        this.target = targetElement;
        this.header = headerElement;
    }

    setPadding() {
        const headerHeight = parseInt(window.getComputedStyle(this.header).height.match("[0-9]*")[0]);
        this.target.style.paddingBlockStart = `${8 * 16 + headerHeight}px`;
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
        this.buttonExpandedText = this.button.querySelector("span.box-button-expand");
        this.buttonCollapsedText = this.button.querySelector("span.box-button-collapse");

        this.button.addEventListener('click', this.toggleButton.bind(this));
        this.update();
    }

    displayButton() {
        if (this.content.scrollHeight > this.content.clientHeight) {
            this.button.style.display = this.buttonExpandedText.style.display = 'inline';
            this.buttonCollapsedText.style.display = 'none';
        } else {
            this.button.style.display = 'none';
        }
    }

    toggleButton() {
        if (this.content.ariaExpanded === "false") {
            this.content.ariaExpanded = "true";
            this.flip();
        } else {
            this.content.ariaExpanded = "false";
            this.flip();
        }
    }

    flip() {
        [this.buttonExpandedText.style.display, this.buttonCollapsedText.style.display]
            = [this.buttonCollapsedText.style.display, this.buttonExpandedText.style.display];
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

        this.headerPadding1 = new HeaderPadding(header1, navbar);
        this.headerPadding2 = new HeaderPadding(header2, navbar);
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