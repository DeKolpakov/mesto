export class Card {
  constructor(itemCard, userId, {openFullImage, deleteCard, likeCard}, cardSelector) {
    this._title = itemCard.name;
    this._image = itemCard.link;
    this._likes = itemCard.likes;
    this._cardId = itemCard.cardId;
    this._ownerId = itemCard.owner._id;

    this._userId = userId;

    this._openFullImage = openFullImage;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;

    this._cardSelector = cardSelector;

    this._cardElement = this._getTemplate();
    this._galeryPhoto = this._cardElement.querySelector(".galery__photo");
    this._galeryTitle = this._cardElement.querySelector(".galery__title");
    this._buttonLike = this._cardElement.querySelector(".galery__button-like");
    this._totalLike = this._cardElement.querySelector("#total-like");
    this._buttonDelete = this._cardElement.querySelector(".galery__button-delete");
  }

  //______________________________________________________________________________________

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector(".galery__item").cloneNode(true);
  }

  //______________________________________________________________________________________

  addLike() {
    //console.log(this._buttonLike)
    this._buttonLike.classList.add("galery__button-like_active");
  }

  removeLike() {
    this._buttonLike.classList.remove("galery__button-like_active");
  }

  isLiked() {
    return this._likes.find((like) => like._id === this._userId);
  }

  setLikes(like) {
    //console.log(like)
    this._likes = like;
    if (this.isLiked()) {
      this.addLike();
    } else {
      this.removeLike();
    }
    this._totalLike.textContent = this._likes.length;
  }

  //______________________________________________________________________________________

  removeCard() {
    //console.log(this._cardElement)
    this._cardElement.remove();
  }

  //______________________________________________________________________________________

  _setEventListeners() {
    this._buttonDelete.addEventListener("click", this._deleteCard);

    this._buttonLike.addEventListener("click", this._likeCard);

    this._galeryPhoto.addEventListener("click", () => {
      this._openFullImage(this._image, this._title);
    });
  }

  //______________________________________________________________________________________

  createCard() {
    this._galeryTitle.textContent = this._title;
    this._galeryTitle.alt = this._title;
    this._galeryPhoto.src = this._image;

    this.setLikes(this._likes);

    if (this._userId !== this._ownerId) {
      this._buttonDelete.style.display = "none";
    }
    
    this._setEventListeners();
    return this._cardElement;
  }
}
