import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, {callbackSubmitForm}) {
    super(popup);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formElement = this._popup.querySelector(".popup__form");
    //this._inputAll = Array.from(this._formElement.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".popup__input");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    //console.log(this._formValues);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      //console.log(this._getInputValues())
      this._callbackSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

/*  _getInputValues() {
    this._formValues = {};
    this._inputAll.forEach((inputItem) => {
      this._formValues[inputItem.name] = inputItem.value;
    });
    return this._formValues;
  } */
