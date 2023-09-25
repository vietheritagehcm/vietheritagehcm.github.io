import post from "../api/post/post-content.js";
import Distributor from "../helper/distributor.js";

class PostDistributor extends Distributor {
    constructor(lang, page, target) {
        super(lang, page);
        this.target = target;
        this.update(lang);
    }

    update (lang) {
        this.lang = lang;
        this.content = post[this.lang];

        this.populatePost();
    }
}

export default PostDistributor;