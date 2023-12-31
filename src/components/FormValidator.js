export class FormValidator {
  constructor(validationConfig, formElement) {
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

  //__INPUTS______________________________________________________________________________

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

  //__BUTTONS______________________________________________________________________________

  _enableSubmitButton() {
    this._submitButton.removeAttribute("disabled", "");
    this._submitButton.classList.add(this._activeButtonClass);
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  disableSubmitButton() {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.classList.remove(this._activeButtonClass);
  }

  _submitButtonState() {
    const invalidInputs = this._inputsAll.some((inputElement) => !inputElement.validity.valid);
    if (invalidInputs) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  //__LISTENERS____________________________________________________________________________

  _setEventListeners() {
    this._submitButtonState();
    this._form.addEventListener("submit", () => {
      this.disableSubmitButton();
    });

    this._inputsAll.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validationInput(inputElement);
        this._submitButtonState();
      });
    });
  }

  //______________________________________________________________________________________

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
