export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
    this._renderer = renderer;
  }

  addCards() {
    this._initialCards.forEach((element) => {
      this.addItem(element);
    });
  }

  addItem(dataAdd) {
    this._container.prepend(this._renderer(dataAdd));
  }
}
