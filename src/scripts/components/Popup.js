export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popup.querySelector(".popup__close-icon");
  }

  _handleEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleCloseBtn = () => {
    this.close();
  };

  _handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", this._handleCloseBtn);
    this._popup.addEventListener("click", this._handleOverlay);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEsc);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEsc);
  }
}
