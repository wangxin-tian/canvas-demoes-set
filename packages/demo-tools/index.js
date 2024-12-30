export function createDiv() {
    const dom = document.createElement('div');
    dom.textContent = 'Hello World'
    document.body.appendChild(dom);
    return dom;
}