export default class Section {
    constructor ({ items, renderer }, containerSelector) {
        this.initialArray = items;
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems () {
        this.initialArray.forEach(item => {
            this.renderer(item);
        })
    }

    clear () {
        this._container.innerHTML = "";
    }

    addItemPrepend (element) {
        this._container.prepend(element);
    }

    addItemAppend (element) {
        this._container.append(element);
    }
}