import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm
    this._formElement = this._popupItem.querySelector('.popup__form')
    this._inputAll = Array.from(this._formElement.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    
    this._formValues = {};
    this._inputAll.forEach(inputItem => {
      this._formValues[inputItem.name] = inputItem.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })

  }

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }

}