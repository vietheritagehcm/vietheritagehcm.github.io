import content from "../content/content.js"; //Simulate API fetch to get navbar content in different languages

class Navbar {
    constructor(targetNavbar) {
        const navbarItems = targetNavbar.querySelectorAll("a.nav-link");

        for (let i = 0; i < navbarItems.length; i++) {
            navbarItems[i].appendChild(document.createTextNode(content["main-nav"][i]));
        }
    }
}

export default Navbar;