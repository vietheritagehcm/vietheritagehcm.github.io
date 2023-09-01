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

export default BoxInteraction;