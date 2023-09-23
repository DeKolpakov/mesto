export class Popup {
  constructor(popupSelector) {
    this._popupItem = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popupItem.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  closePopup() {
    this._popupItem.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
     /*  const popupOpened = document.querySelector(".popup_opened");
      closePopup(popupOpened); */
      this.closePopup()
    }
  }

  setEventListeners() {
     this._popupItem.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.closePopup();
      }
    });

    this._popupItem.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.closePopup();
      }
    }); 
  }

  /* const closePopupProfileByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      closePopupProfile();
    }
  }; */
}
