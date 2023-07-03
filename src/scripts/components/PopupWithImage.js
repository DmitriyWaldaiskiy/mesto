import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._imageCaption = this._popup.querySelector(".popup__caption-image");
  }

  open = (cardData) => {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.place;
    this._imageCaption.textContent = `На фото ${cardData.name}`;
    super.open();
  };
}
