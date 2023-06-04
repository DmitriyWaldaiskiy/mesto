class FormValidator {
  constructor(enableValidation, form) {
    this._form = form;
    this._formSelector = enableValidation.formSelector;
    this._inputSelector = enableValidation.inputSelector; //: ".popup__input",
    this._submitButtonSelector = enableValidation.submitButtonSelector; //: ".popup__button-submit",
    this._inactiveButtonClass = enableValidation.inactiveButtonClass; //: "popup__button-submit_off",
    this._inputErrorClass = enableValidation.inputErrorClass; //: "popup__input_invalid",
    this._errorClass = enableValidation.errorClass; //: "popup__input-error",
    this._formList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }
}

_showError = (inputElement) => {
  this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  this._errorElement.textContent = inputElement.validationMessage;
  this._errorElement.classList.add(this._errorClass);
  console.log(_errorElement);
};

_hideError = (inputElement) => {
  this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  this._errorElement.classList.remove(config.errorClass);
  this._errorElement.textContent = "";
  console.log(_errorElement);
};

_checkInputValidity = () => {
  if (!inputElement.validity.valid) {
    this._showError(inputElement);
  } else {
    this._hideError(inputElement);
  }
};

_invalidInput = () => {
  return this._inputList.some((input) => {
    return !input.validity.valid;
  });
};

_deactivateButton = () => {
  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.setAttribute("disabled", true);
};

_activateButton = () => {
  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.removeAttribute("disabled", true);
};

_toggleButtonState = () => {
  if (this._invalidInput()) {
    this._deactivateButton();
  } else {
    this._activateButton();
  }
};

_setEventListeners = () => {
  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
    this._setEventListeners();
  });
};

_enableValidation = () => {
  this._formList = Array.from(document.querySelectorAll(this._formSelector));
  this._formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  });
};

export { FormValidator };
