import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupItem) {
    super(popupItem);
    this._image = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__caption-image");
  }

  open = (cardData) => {
    this._image.src = cardData.link;
    this._image.alt = `На фотографии ${cardData.title}`;
    this._caption.textContent = cardData.title;
    super.open();
  };
}
