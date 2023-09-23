import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupItem) {
    super(popupItem);
    this._popupPhoto = this._popupItem.querySelector(".popup__photo-fullimage");
    this._popupTitle = this._popupItem.querySelector(".popup__name-fullimage");
  }

  openPopup(link, name) {
    this._popupPhoto.src = link;
    this._popupTitle.textContent = name;
    this._popupTitle.alt = name;
    super.openPopup;
  }
}
