import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, functionSubmit) {
    super(popupSelector);
    this._functionSubmit = functionSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    document.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._functionSubmit({ card: this._element, cardId: this._cardId });
    });
  }

  open = ({ card, cardId }) => {
    super.open();
    this._element = card;
    this._cardId = cardId;
  };
}
