export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addCards(cardData) {
    cardData.forEach((element) => {
      this._renderer(element);
    });
  }

  addItemPrepend(domElement) {
    this._container.prepend(domElement);
  }

  addItemAppend(domElement) {
    this._container.append(domElement);
  }
}
