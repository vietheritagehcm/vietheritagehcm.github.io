import content from "../content/content.js";

class ContentDistributor {
    constructor(lang) {
        if (lang) {
            this.update(lang);
        } else {
            throw new Error("\"lang\" property is empty");
        }
    }

    update(lang) {
        this.content = content[lang];
        
        for (const id in this.content) {
            document.getElementById(id).innerHTML = DOMPurify.sanitize(this.content[id]);
        }
    }
}

export default ContentDistributor;

