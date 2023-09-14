import PostDistributor from "../helper/post-distributor.js";

class PostContentDistributor extends PostDistributor {
    createTemplate() {
        this.contentCarousel = document.createElement("div");
        this.imageCarousel = document.createElement("div");

        this.contentCarousel.id = "content-carousel";
        this.imageCarousel.id = "image-carousel";

        this.contentCarousel.classList.add("carousel", "slide");
        this.imageCarousel.classList.add("carousel", "slide");

        this.contentCarousel.setAttribute("data-bs-ride", "carousel");
        this.imageCarousel.setAttribute("data-bs-ride", "carousel");
    }

    createCarousel(target, containerName, newElementHandler) {
        const documentFragment = document.createDocumentFragment();
        const container = document.createElement("div");
        let state = "active";
        container.classList.add("carousel-inner");

        for (const content of this.content[this.target.id][containerName]) {
            const temp = newElementHandler(content);
            if (state) {
                temp.classList.add(state);
            }
            state = "";
            documentFragment.appendChild(temp);
        }

        container.appendChild(documentFragment);
        target.appendChild(container);
        this.target.appendChild(target);
    }

    populatePost() {
        this.createTemplate();
        this.createCarousel(this.contentCarousel, "content", (content) => {
            const temp = document.createElement("div");
            temp.classList.add("carousel-item");
            temp.innerHTML = DOMPurify.sanitize(content);
            return temp;
        });
        this.createCarousel(this.imageCarousel, "image", (image) => {
            const temp = document.createElement("div");
            const newImage = document.createElement("img");
            temp.classList.add("carousel-item");
            newImage.src = image;
            temp.appendChild(newImage);

            return temp;
        });
        
    }

    stylePost() {}
};

export default PostContentDistributor;