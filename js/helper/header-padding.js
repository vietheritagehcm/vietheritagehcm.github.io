function setPadding(target, header) {
    const headerHeight = parseInt(window.getComputedStyle(header).height.match("[0-9]*")[0]);
    const targetPaddingStart = parseInt(window.getComputedStyle(target).paddingBlockStart.match("[0-9]*")[0]);
    if (targetPaddingStart < headerHeight) {
        target.style.paddingBlockStart = `${targetPaddingStart + headerHeight}px`;
    }
}

export default setPadding;