export class Card {
  constructor({itemCard, openFullImage}, cardSelector) {
    this._title = itemCard.name;
    this._image = itemCard.link;
    this._cardSelector = cardSelector;
    this._openFullImage = openFullImage;

    this._cardElement = this._getTemplate();
    /* document
    .querySelector(this._cardSelector)
    .content.querySelector(".galery__item")
    .cloneNode(true); */
    this._galeryPhoto = this._cardElement.querySelector(".galery__photo");
    this._galeryTitle = this._cardElement.querySelector(".galery__title");
  }

  _getTemplate() {
    const element = document.querySelector(this._cardSelector).content.querySelector(".galery__item").cloneNode(true);
    return element;
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
    this._cardElement.querySelector(".galery__button-delete").addEventListener("click", this._removeCard);
    this._cardElement.querySelector(".galery__button-like").addEventListener("click", this._toggleLike);
    this._galeryPhoto.addEventListener("click", () => {
      this._openFullImage(this._image, this._title);
    });
  }

  //______________________________________________________________________________________

  createCard() {
    //console.log(this._galeryTitle.textContent = this._title);
    //console.log(itemCard)
    //console.log(this._title)
    this._galeryTitle.textContent = this._title;
    this._galeryTitle.alt = this._title;
    this._galeryPhoto.src = this._image;

    this._setEventListeners();
    //console.log(this._cardElement);
    return this._cardElement;
  }
}
