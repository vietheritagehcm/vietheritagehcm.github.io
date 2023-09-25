class Distributor {
    constructor(lang, page) {
        if (lang && page) {
            this.lang = lang;
            this.page = page;
        } else {
            throw new Error(`"lang" or "page" is not defined`);
        }
    }

    update(lang, contentTarget) {
        if (contentTarget === undefined) {
            throw new Error(`Contents is not specified`);
        }
        lang = lang ? lang : this.lang;
        
        const updateContent = (lang, page) => {
            lang = lang ? lang : this.lang;
            page = page ? page : "general";
            this.content = contentTarget;
            if (this.content) {
                for (const id in this.content) {
                    const target = document.getElementById(id);
                    if (target) {
                        target.innerHTML = DOMPurify.sanitize(this.content[id]);
                    }
                }
            }   
        }
        updateContent(lang);
        updateContent(lang, this.page);
    }

    update() {}
}

export default Distributor;