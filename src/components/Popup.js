export class Popup {
  constructor(popup) {
    //this._popupItem = document.querySelector(popupSelector);
    this._popup = popup;
  }

  openPopup() {
    //console.log(this._popup)
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  close() {
    //console.log(this._popup)
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      /*  const popupOpened = document.querySelector(".popup_opened");
      close(popupOpened); */
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__button-close")) {
        this.close();
      }
    });
  }
}

/* const closeProfileByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      closeProfile();
    }
  }; */
