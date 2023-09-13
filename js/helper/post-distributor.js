import post from "../api/post/post.js";
import Distributor from "../helper/distributor.js";

class PostDistributor extends Distributor {
    constructor(lang, page, target) {
        super(lang, page);
        this.target = target;
        this.content = post[this.lang];

        this.populatePost();
        this.stylePost();
    }
}

export default PostDistributor;