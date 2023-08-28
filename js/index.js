const setHeaderPadding = (targetQuery) => {
    const target = document.querySelector(`${targetQuery}`);
    const header = document.querySelector('header');
    const headerHeight = parseInt(window.getComputedStyle(header).height.match("[0-9]*")[0]);
    target.style.paddingBlockStart = `${8 * 16 + headerHeight}px`;
}

const boxList = document.querySelectorAll('.box');

boxList.forEach((e) => {
    const content = e.querySelector(".box-content");
    const button = e.querySelector("a[type=button][aria-controls=box-content]");
    const buttonExpandedText = button.querySelector("span.box-button-expand");
    const buttonCollapsedText = button.querySelector("span.box-button-collapse");
    const flip = () => {
        [buttonExpandedText.style.display, buttonCollapsedText.style.display]
      = [buttonCollapsedText.style.display, buttonExpandedText.style.display];
    };
    
    if (content.scrollHeight > content.clientHeight) {
        button.style.display = buttonExpandedText.style.display = 'inline';
        buttonCollapsedText.style.display = 'none';
    } else {
        button.style.display = 'none';
    }

    button.addEventListener('click', (event) => {
        if (content.ariaExpanded === "false") {
            content.ariaExpanded = "true"
            flip();
        } else {
            content.ariaExpanded = "false"
            flip();
        }
    })
})

setHeaderPadding("#hero");
setHeaderPadding("#introduction");

