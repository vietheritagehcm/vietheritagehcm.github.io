import PostDistributor from "../helper/post-distributor.js";

class PostMenuDistributor extends PostDistributor {
    populatePost() {
        const documentFragment = document.createDocumentFragment();

        if (this.content) {
            for (const postName in this.content) {
                if (this.content[postName]) {
                    const post = this.content[postName];
                    const container = document.createElement("div");
                    const imgContainer = document.createElement("div");
                    const title = document.createElement("a");
                    title.innerHTML = DOMPurify.sanitize(post["title"]);
                    title.href = `./${postName}.html`;
                    imgContainer.innerHTML = DOMPurify.sanitize(post["image"][0]);
                    container.classList.add("post");
                    title.classList.add("post-title");
                    imgContainer.querySelector("img").classList.add("post-thumbnail");
                    imgContainer.classList.add("post-thumbnail-container");

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

        for (const thumbnail of postThumbnails) {
            thumbnail.style.height = `${postThumbnailWidth}px`;
        }
    }

    update() {
        this.stylePost();
    }
}

export default PostMenuDistributor;