const setHeaderPadding = (targetQuery) => {
    const target = document.querySelector(`${targetQuery}`);
    const header = document.querySelector('header');
    const headerHeight = parseInt(window.getComputedStyle(header).height.match("[0-9]*")[0]);
    target.style.paddingBlock = `${8 * 16 + headerHeight}px`;
}

const boxList = document.querySelectorAll('.box');

boxList.forEach((e) => {
    const content = e.querySelector(".box-content");
    const button = e.querySelector("a[type=button][aria-controls=box-content]");
    
    if (content.scrollHeight > content.clientHeight) {
        button.style.display = 'inline';
    } else {
        button.style.display = 'none';
    }

    button.addEventListener('click', (event) => {
        if (content.ariaExpanded === "false") {
            content.ariaExpanded = "true"
            button.innerText = "Read less";
        } else {
            content.ariaExpanded = "false"
            button.innerText = "Read more";
        }
    })
})

setHeaderPadding("#hero");
setHeaderPadding("#introduction");

