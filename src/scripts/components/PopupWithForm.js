import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupItem, submitForm) {
    super(popupItem);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector(".popup__container");
    this._inputList = this._form.querySelector(".popup__input");
  }

  getInputValue() {
    this._value = {};
    this._inputList.forEach((inputElements) => {
      this._value[inputElements.name] = inputElements.value;
    });
    return this._value;
  }

  setInputValue(configInfo) {
    this._inputList.forEach((inputElements) => {
      inputElements.value = configInfo[inputElements.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
