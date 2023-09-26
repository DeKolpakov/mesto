import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPhoto = this._popup.querySelector(".popup__photo-fullimage");
    this._popupTitle = this._popup.querySelector(".popup__name-fullimage");
  }

  openPopup(itemCard) {
    super.openPopup();
    this._popupPhoto.src = itemCard.link;
    this._popupTitle.textContent = itemCard.name;
    this._popupTitle.alt = itemCard.name;
  }
}
