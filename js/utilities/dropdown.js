class Dropdown {
    constructor(id, contentDistributor) {
        this.dropdown = document.querySelector(id);
        if (this.dropdown) {
            const dropdownMenu = this.dropdown.querySelector(".dropdown-menu");
            const dropdownButton = this.dropdown.querySelector("a.btn[type=button]");

            let currentLanguage = dropdownButton.getAttribute("data-lang");
            let lastChoice = dropdownMenu.querySelector(`a[data-lang=${currentLanguage}]`);
            const updateLanguage = (curr) => {
                currentLanguage = curr ? curr : dropdownButton.getAttribute("data-lang");
                lastChoice = dropdownMenu.querySelector(`a[data-lang=${currentLanguage}]`);
            }
            lastChoice.style.display = "none";

            dropdownMenu.addEventListener("click", (event) => {
                if (event.target.tagName === "A") {
                    const targetLang = event.target.getAttribute("data-lang");

                    currentLanguage = targetLang;
                    event.target.style.display = "none";
                    lastChoice.style.display = "block";

                    dropdownButton.innerText = event.target.innerText;
                    dropdownButton.setAttribute("data-lang", targetLang);

                    updateLanguage(targetLang);
                    /*Instead of fetching html content from API, 
                      we just load local content because we don't have an API lmao*/
                    contentDistributor.update(targetLang);
                }
            })
        }
    }
}

export default Dropdown;