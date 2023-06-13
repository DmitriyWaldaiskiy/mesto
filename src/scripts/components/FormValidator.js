export default class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector; //: ".popup__input",
    this._submitButtonSelector = validationConfig.submitButtonSelector; //: ".popup__button-submit",
    this._inactiveButtonClass = validationConfig.inactiveButtonClass; //: "popup__button-submit_off",
    this._inputErrorClass = validationConfig.inputErrorClass; //: "popup__input_invalid",
    this._errorClass = validationConfig.errorClass; //: "popup__input-error",
    this._inputList = Array.from(
      document.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    console.log(this._inputList);
  }

  _showError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };

  _hasInvalidInput = () => {
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
    if (this._hasInvalidInput()) {
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

  enableValidation = () => {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  resetError = () => {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      if (input.validity.valid) {
        this._activateButton();
      } else {
        this._deactivateButton();
      }
    });
  };
}
