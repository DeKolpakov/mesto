import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupItem){
    super(popupItem);
    this._popupPhoto = this._popupItem.querySelector()
    this._popupTitle = this._popupItem.querySelector()
  }

  openPopup(link, name) {
    this._popupPhoto.src = link;
    this._popupTitle.textContent = name;
    this._popupTitle.alt = name;
    super.openPopup;
  };
  
}