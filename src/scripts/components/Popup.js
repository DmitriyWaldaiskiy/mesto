export default class Popup {
  constructor(popupItem) {
    this._popup = document.querySelector(popupItem);
  }

  //закрытие по Esc

  _handleEsc = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  //закрытие по оверлею

  _handleClickClose = (event) => {
    this._overlay = event.target.classList.contains("popup");
    this._closeButtons = event.target.classList.contains("popup__close-icon");
    if (this._overlay || this._closeButtons) {
      this.close();
    }
  };

  open() {
    this._popup.classList.add("popup_opened");
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("click", this._handleClickClose);
    document.removeEventListener("keydown", this._handleEsc);
  }

  setEventListeners() {
    document.removeEventListener("click", this._handleClickClose);
    document.removeEventListener("keydown", this._handleEsc);
  }
}
