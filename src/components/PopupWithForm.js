import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, {callbackSubmitForm}) {
    super(popup);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input"));
    this._submitButton = this._popup.querySelector(".popup__button-save");
    this._defaultButton = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = "Сохранение...";
      this._callbackSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  resetButtonSubmit() {
    this._submitButton.textContent = this._defaultButton;
  }
}
