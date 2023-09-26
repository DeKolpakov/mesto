import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPhoto = this._popup.querySelector(".popup__photo-fullimage");
    this._popupTitle = this._popup.querySelector(".popup__name-fullimage");
  }

  openPopup({name, link}) {
    super.openPopup();
    this._popupPhoto.src = link;
    this._popupTitle.textContent = name;
    this._popupTitle.alt = name;
  }
}
