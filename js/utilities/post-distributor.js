import post from "../api/post/post.js";
import Distributor from "../helper/distributor.js";

class PostDistributor extends Distributor {
    update(target) {
        const documentFragment = document.createDocumentFragment();

        this.content = post[this.lang];

        if (this.content) {
            const containerWidth = parseInt(window.getComputedStyle(target).width.match("[0-9]*")[0]);

            for (const postName in this.content) {
                if (this.content[postName]) {
                    const post = this.content[postName];
                    const container = document.createElement("div");
                    const imgContainer = document.createElement("div");
                    const title = document.createElement("a");
                    const image = document.createElement("img");
                    title.innerHTML = DOMPurify.sanitize(post["title"]);
                    title.href = `./${postName}.html`;
                    image.src = post["image"][0];
                    image.loading = "lazy";
                    image.style.width = `${containerWidth / 4}px`;
                    image.style.height = image.style.width;
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

        target.appendChild(documentFragment);
    }
}

export default PostDistributor;