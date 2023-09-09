class FormValidator {
  constructor(validationConfig, formElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._activeButtonClass = validationConfig.activeButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._form = formElement;
    this._inputsAll = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  //______________________________________________________________________________________

  _setEventListeners() {
    this._submitButtonState();
    this._form.addEventListener("submit", () => {
      this._disableSubmitButton();
    });

    this._inputsAll.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validationInput(inputElement);
        this._submitButtonState();
      });
    });
  }

  //______________________________________________________________________________________

  _validationInput(inputElement) {
    this._inputError = this._form.querySelector(`#${inputElement.id}_error`);
    if (inputElement.validity.valid) {
      inputElement.classList.remove(this._inputErrorClass);
      this._inputError.classList.remove(this._errorClass);
      this._inputError.textContent = "";
    } else {
      inputElement.classList.add(this._inputErrorClass);
      this._inputError.classList.add(this._errorClass);
      this._inputError.textContent = inputElement.validationMessage;
    }
  }

  //_______________________________________________________________________________

  _submitButtonState() {
    const invalidInputs = this._inputsAll.some((inputElement) => !inputElement.validity.valid);
    if (invalidInputs) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }

  _enableSubmitButton() {
    this._submitButton.setAttribute("disabled", false);
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.classList.remove(this._activeButtonClass);
  }

  _disableSubmitButton() {
    this._submitButton.removeAttribute("disabled", true);
    this._submitButton.classList.add(this._activeButtonClass);
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  //_____________________________________________________________________________________

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

//_____________________________________________________________________________

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_invalid",
  activeButtonClass: "popup__button-save_valid",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-span_error",
};

export {FormValidator, validationConfig};
