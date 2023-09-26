import PostDistributor from "../helper/post-distributor.js";

class PostContentDistributor extends PostDistributor {
    createTemplate() {
        this.contentCarousel = document.getElementById("content-carousel");
        this.imageCarousel = document.getElementById("image-carousel");

        this.contentCarouselControl = new bootstrap.Carousel(this.contentCarousel);
        this.imageCarouselControl = new bootstrap.Carousel(this.imageCarousel);
    }

    createCarousel(target, containerName, newElementHandler) {
        const documentFragment = document.createDocumentFragment();
        const container = target.querySelector("div.carousel-inner");
        let state = "active";
        container.innerHTML = "";

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
            temp.classList.add("carousel-item");
            temp.innerHTML = DOMPurify.sanitize(image, {ALLOWED_TAGS: ["iframe", "img"]});
            return temp;
        });

        //Idk
        const iframes = this.imageCarousel.querySelectorAll("iframe");

        iframes.forEach((iframe) => {
            iframe.addEventListener("ended", () => {
                this.imageCarouselControl.next();
            });
        });
    }
};

export default PostContentDistributor;