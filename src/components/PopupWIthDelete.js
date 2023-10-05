import {Popup} from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(popup) {
    super(popup);
    this._popupForm = this._popup.querySelector("#delete-form");
    this._buttonYes = this._popupForm.querySelector(".popup__button-save");
    this._defaultButton = this._buttonYes.textContent;
  }

  setSubmit(submit) {
    this._submitForm = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._buttonYes.textContent = "Удаление...";
      this._submitForm();
    });
  }

  resetButtonYes() {
    this._buttonYes.textContent = this._defaultButton;
  }
}
