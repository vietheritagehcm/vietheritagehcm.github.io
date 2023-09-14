import content from "../api/content/content.js";
import Distributor from "../helper/distributor.js";

class ContentDistributor extends Distributor {
    update(lang) {
        lang = lang ? lang : this.lang;
        
        const updateContent = (lang, page) => {
            lang = lang ? lang : this.lang;
            page = page ? page : "general";
            this.content = content[lang][page];
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
}

export default ContentDistributor;

