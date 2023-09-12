import content from "../api/content/content.js";
import Distributor from "../helper/distributor.js";

class ContentDistributor extends Distributor {
    update() {
        const updateContent = (lang, page) => {
            this.content = content[lang ? lang : this.lang][page ? page : "general"];
            if (this.content) {
                for (const id in this.content) {
                    const target = document.getElementById(id);
                    if (target) {
                        target.innerHTML = DOMPurify.sanitize(this.content[id]);
                    }
                }
            }   
        }
        updateContent(this.lang);
        updateContent(this.lang, this.page);
    }
}

export default ContentDistributor;

