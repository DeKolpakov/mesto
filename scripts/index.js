import {initialCards} from "./initialCard.js";
import {Card} from "./Card.js";
import {FormValidator, validationConfig} from "./FormValidator.js";

//______________________________________________________________________

const nameOutputProfile = document.querySelector(".profile__name");
const descriptionOutputProfile = document.querySelector(".profile__description");
const buttonEditProfile = document.querySelector(".profile__button-open");

const popupProfile = document.querySelector(".popup_type_profile");
const formProfile = popupProfile.querySelector("#profile-form");
const buttonCloseProfile = popupProfile.querySelector(".popup__button-close_type_profile");
const nameInputPopup = formProfile.querySelector("#profile-name");
const descriptionInputPopup = formProfile.querySelector("#profile-description");

const popupAddImage = document.querySelector(".popup_type_addimage");
const formAddImage = popupAddImage.querySelector("#addimage-form");
const buttonAddImage = document.querySelector(".profile__button-add");
const buttonCloseAddImage = document.querySelector(".popup__button-close_type_add");
const nameAddImageForm = popupAddImage.querySelector("#image-name");
const linkAddImageForm = popupAddImage.querySelector("#image-link");

const galery = document.querySelector(".galery");

const popupFullImage = document.querySelector(".popup_type_fullimage");
const buttonCloseFullImage = popupFullImage.querySelector(".popup__button-close_type_fullimage");
const titleFullImage = popupFullImage.querySelector(".popup__name-fullimage");
const photoFullImage = popupFullImage.querySelector(".popup__photo-fullimage");

//____________________POPUP________________________________

const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
};

const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
};

const closePopupByEsc = (event) => {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};

//____________________POPUP-PROFILE________________________________

const openPopupProfile = () => {
  lookupTextProfileInPopup();
  openPopup(popupProfile);
};

const closePopupProfile = () => {
  closePopup(popupProfile);
};

const closePopupProfileByOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closePopupProfile();
  }
};

//____________________POPUP-FULL________________________________

const openFullImage = (link, name) => {
  photoFullImage.src = link;
  titleFullImage.textContent = name;
  photoFullImage.alt = name;
  openPopup(popupFullImage);
};

const closePopupFullImage = () => {
  closePopup(popupFullImage);
};

const closeOverlayPopupFullImage = (event) => {
  if (event.target === event.currentTarget) {
    closePopupFullImage();
  }
};

//__________________POPUP-ADD____________________________________

const openedPopupAdd = () => {
  openPopup(popupAddImage);
};

const closePopupAdd = (evt) => {
  closePopup(popupAddImage);
  formAddImage.reset();
};

const closeOverlayPopupAdd = (event) => {
  if (event.target === event.currentTarget) {
    closePopupAdd();
  }
};

//____________________VALIDATION_________________________________

const validatorProfileForm = new FormValidator(validationConfig, formProfile);
const validatorAddForm = new FormValidator(validationConfig, formAddImage);

validatorAddForm.enableValidation();
validatorProfileForm.enableValidation();

//____________________EDIT-PROFILE________________________________

const lookupTextProfileInPopup = () => {
  nameInputPopup.value = nameOutputProfile.textContent;
  descriptionInputPopup.value = descriptionOutputProfile.textContent;
};

function handleSubmitProfileForm(event) {
  event.preventDefault();
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
  closePopupProfile();
}

//____________________CREATE_________________________________

const createNewCard = (data, cardSelector) => {
  const newCardElement = new Card(data, cardSelector, openFullImage);
  return newCardElement.createCard();
};

const addCard = (data, cardSelector) => {
  const cardElement = createNewCard(data, cardSelector);

  galery.prepend(cardElement);
};

//_______________________NEW_CARD_______________________________________

const submitFormNewCard = (event) => {
  event.preventDefault();
  const data = {
    name: nameAddImageForm.value,
    link: linkAddImageForm.value,
  };
  addCard(data, ".template__galery-item");
  closePopupAdd();
};

//______________________________RENDER-CARDS_____________________________________________

const renderCards = () => {
  initialCards.forEach((data) => {
    addCard(data, ".template__galery-item");
  });
};

renderCards();

//______________________________________________________________________

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonCloseProfile.addEventListener("click", closePopupProfile);
popupProfile.addEventListener("click", closePopupProfileByOverlay);

buttonCloseFullImage.addEventListener("click", closePopupFullImage);
popupFullImage.addEventListener("click", closeOverlayPopupFullImage);

buttonAddImage.addEventListener("click", openedPopupAdd);
buttonCloseAddImage.addEventListener("click", closePopupAdd);
popupAddImage.addEventListener("click", closeOverlayPopupAdd);

popupAddImage.addEventListener("submit", submitFormNewCard);

formProfile.addEventListener("submit", handleSubmitProfileForm);

//export {openPopup, popupFullImage, photoFullImage, titleFullImage};

//______________________INIT____________________________________

/* const createCard = (item) => {
  const element = templateGalery.content.cloneNode(true);

  const title = element.querySelector(".galery__title");
  const image = element.querySelector(".galery__photo");
  const buttonLike = element.querySelector(".galery__button-like");
  const buttonDelete = element.querySelector(".galery__button-delete");

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;

  const toggleLike = (event) => {
    event.target.classList.toggle("galery__button-like_active");
  };

  const removeCard = (event) => {
    event.target.closest(".galery__item").remove();
  };

  const openFullImage = () => {
    photoFullImage.src = item.link;
    titleFullImage.textContent = item.name;
    photoFullImage.alt = item.name;
    openPopup(popupFullImage);
  };

  buttonDelete.addEventListener("click", removeCard);
  buttonLike.addEventListener("click", toggleLike);
  image.addEventListener("click", openFullImage);

  return element;
}; */
