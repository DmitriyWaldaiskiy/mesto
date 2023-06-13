export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
    this.renderer = renderer;
  }

  addCard() {
    this._initialCards.array.forEach((element) => {
      this._addItem(this.renderer(element));
    });
  }

  _addItem(domElement) {
    this._container.append(domElement);
  }

  addNewElement(domElement) {
    this._container.prepend(domElement);
  }
}
