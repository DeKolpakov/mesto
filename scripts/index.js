import {initialCards} from "./initialCard.js";
import {Card} from "./Card.js";
import {FormValidator, validationConfig} from "./FormValidator.js";
import {
  nameOutputProfile,
  descriptionOutputProfile,
  buttonEditProfile,
  popupProfile,
  formProfile,
  buttonCloseProfile,
  nameInputPopup,
  descriptionInputPopup,
  popupAddImage,
  formAddImage,
  buttonAddImage,
  buttonCloseAddImage,
  nameAddImageForm,
  linkAddImageForm,
  galery,
  popupFullImage,
  buttonCloseFullImage,
  titleFullImage,
  photoFullImage,
} from "./constants.js";

//__POPUP_______________________________________________________________________________

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

//__POPUP-PROFILE________________________________________________________________________

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

//___POPUP-FULLIMAGE______________________________________________________________________

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

//___POPUP-ADD___________________________________________________________________________

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

//__VALIDATION___________________________________________________________________________

const validatorProfileForm = new FormValidator(validationConfig, formProfile);
const validatorAddForm = new FormValidator(validationConfig, formAddImage);

validatorAddForm.enableValidation();
validatorProfileForm.enableValidation();

//__EDIT-PROFILE_________________________________________________________________________

const lookupTextProfileInPopup = () => {
  nameInputPopup.value = nameOutputProfile.textContent;
  descriptionInputPopup.value = descriptionOutputProfile.textContent;
};

function submitProfileForm(event) {
  event.preventDefault();
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
  closePopupProfile();
}

//__NEWCARD-CREATE________________________________________________________________________

const createNewCard = (data, cardSelector) => {
  const newCardElement = new Card(data, cardSelector, openFullImage);
  return newCardElement.createCard();
};

const addCard = (data, cardSelector) => {
  const cardElement = createNewCard(data, cardSelector);

  galery.prepend(cardElement);
};

//___NEWCARD-SUBMIT______________________________________________________________________

const submitFormNewCard = (event) => {
  event.preventDefault();
  const data = {
    name: nameAddImageForm.value,
    link: linkAddImageForm.value,
  };
  addCard(data, ".template__galery-item");
  validatorAddForm.disableSubmitButton();
  closePopupAdd();
};

//__RENDER______________________________________________________________________________

const renderCards = () => {
  initialCards.forEach((data) => {
    addCard(data, ".template__galery-item");
  });
};

renderCards();

//__LISTENERS___________________________________________________________________________

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonCloseProfile.addEventListener("click", closePopupProfile);
popupProfile.addEventListener("click", closePopupProfileByOverlay);

buttonCloseFullImage.addEventListener("click", closePopupFullImage);
popupFullImage.addEventListener("click", closeOverlayPopupFullImage);

buttonAddImage.addEventListener("click", openedPopupAdd);
buttonCloseAddImage.addEventListener("click", closePopupAdd);
popupAddImage.addEventListener("click", closeOverlayPopupAdd);

popupAddImage.addEventListener("submit", submitFormNewCard);

formProfile.addEventListener("submit", submitProfileForm);
