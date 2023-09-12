class Distributor {
    constructor(lang, page) {
        if (lang && page) {
            this.lang = lang;
            this.page = page;
        } else {
            throw new Error(`"lang" or "page" is not defined`);
        }
    }

    update() {}
}

export default Distributor;