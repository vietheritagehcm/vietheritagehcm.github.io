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

export default HeaderPadding;