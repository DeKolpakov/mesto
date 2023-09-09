export class Card {
  constructor(data, cardSelector, openFullImage) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._openFullImage = openFullImage;
  }
  //______________________________________________________________________________________

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".galery__item")
      .cloneNode(true);
    return cardElement;
  }

  //______________________________________________________________________________________

  _toggleLike(evt) {
    evt.target.classList.toggle("galery__button-like_active");
  }

  _removeCard(evt) {
    evt.target.closest(".galery__item").remove();
  }

  //______________________________________________________________________________________

  _setEventListeners() {
    this._element.querySelector(".galery__button-delete").addEventListener("click", this._removeCard);
    this._element.querySelector(".galery__button-like").addEventListener("click", this._toggleLike);
    this._element.querySelector(".galery__photo").addEventListener("click", () => {
      this._openFullImage(this._image, this._title);
    });
  }

  //______________________________________________________________________________________

  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".galery__title").textContent = this._title;
    this._element.querySelector(".galery__title").alt = this._title;
    this._element.querySelector(".galery__photo").src = this._image;

    this._setEventListeners();

    return this._element;
  }
}

//import { openPopup, popupFullImage, photoFullImage, titleFullImage } from "./index.js";

/* _openFullImage() {
    photoFullImage.src = this._image;
    titleFullImage.textContent = this._title;
    photoFullImage.alt = this._title;
    openPopup(popupFullImage);
  } */
