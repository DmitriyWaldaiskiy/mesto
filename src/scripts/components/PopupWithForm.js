import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, functionSubmit) {
    super(popupSelector);
    this._functionSubmit = functionSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__button-submit");
    this._defaulTextButton = this._submitButton.textContent;
  }

  _getInputsValue() {
    this._values = {};
    this._inputList.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  setInputsValue(userNewData) {
    this._inputList.forEach((input) => {
      input.value = userNewData[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      this._functionSubmit(this._getInputsValue());
    });
  }

  setupTextDefault() {
    this._submitButton.textContent = this._defaulTextButton;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
