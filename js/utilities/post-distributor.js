import post from "../api/post/post.js";
import Distributor from "../helper/distributor.js";

class PostDistributor extends Distributor {
    constructor(lang, page, target) {
        super(lang, page);
        this.target = target;

        this.populatePost();
        this.stylePost();
    }

    populatePost() {
        const documentFragment = document.createDocumentFragment();

        this.content = post[this.lang];

        if (this.content) {
            for (const postName in this.content) {
                if (this.content[postName]) {
                    const post = this.content[postName];
                    const container = document.createElement("div");
                    const imgContainer = document.createElement("div");
                    const title = document.createElement("a");
                    const image = document.createElement("img");
                    title.innerHTML = DOMPurify.sanitize(post["title"]);
                    title.href = `./page/${postName}.html`;
                    image.src = post["image"][0];
                    image.loading = "lazy";
                    container.classList.add("post");
                    title.classList.add("post-title");
                    image.classList.add("post-thumbnail");
                    imgContainer.classList.add("post-thumbnail-container");
        
                    imgContainer.appendChild(image);
                    container.appendChild(imgContainer);
                    container.appendChild(title);
        
                    documentFragment.appendChild(container);
                }
            }
        }

        this.target.appendChild(documentFragment);
    }

    stylePost() {
        const postThumbnails = this.target.querySelectorAll(".post-thumbnail");
        const postThumbnailWidth = parseInt(window.getComputedStyle(postThumbnails[0]).width.match("[0-9]*")[0]);
        console.log(postThumbnailWidth);

        for (const thumbnail of postThumbnails) {
            thumbnail.style.height = `${postThumbnailWidth}px`;
        }
    }

    update() {
        this.stylePost();
    }
}

export default PostDistributor;