import "./index.css";
import {initialCards} from "../utils/initialCard.js";
import {Card} from "../components/Card.js";
import {FormValidator, validationConfig} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";

import {
  nameOutputProfile,
  descriptionOutputProfile,
  buttonEditProfile,
  popupProfile,
  formProfile,
  nameInputPopup,
  descriptionInputPopup,
  popupAddImage,
  formAddImage,
  buttonAddImage,
  galery,
  popupFullImage,
} from "../utils/constants.js";

//__EDIT-PROFILE_________________________________________________________________________

const editProfilePopup = new PopupWithForm(popupProfile, {
  callbackSubmitForm: (formData) => {
    userInfo.setUserInfo(formData);
  },
});

//___POPUP-ADD___________________________________________________________________________

const addImagePopup = new PopupWithForm(popupAddImage, {
  callbackSubmitForm: (formData) => {
    renderCard.addItem(createNewCard(formData));
  },
});

//___POPUP-FULLIMAGE______________________________________________________________________

const popupImage = new PopupWithImage(popupFullImage);

//__PROFILE______________________________________________________________________________

const userInfo = new UserInfo(nameOutputProfile, descriptionOutputProfile);

editProfilePopup.setEventListeners();
addImagePopup.setEventListeners();
popupImage.setEventListeners();

//__NEWCARD-CREATE________________________________________________________________________

const createNewCard = (itemCard) => {
  const newCardElement = new Card(
    {
      itemCard,
      openFullImage: () => {
        popupImage.openPopup(itemCard);
      },
    },
    ".template__galery-item"
  );
  return newCardElement.createCard();
};

//__INITIALRENDER________________________________________________________________________

const renderCard = new Section(
  {
    cardList: initialCards,
    renderer: (itemCard) => {
      renderCard.addItem(createNewCard(itemCard));
    },
  },
  galery
);

renderCard.rendererAllCard();

//__VALIDATION___________________________________________________________________________

const validatorProfileForm = new FormValidator(validationConfig, formProfile);
const validatorAddForm = new FormValidator(validationConfig, formAddImage);

validatorAddForm.enableValidation();
validatorProfileForm.enableValidation();

//__LISTENERS___________________________________________________________________________

const openProfilePopup = () => {
  const {name, description} = userInfo.getUserInfo(name, description);
  editProfilePopup.openPopup();
  nameInputPopup.value = name;
  descriptionInputPopup.value = description;
};

const openAddImagePopup = () => {
  addImagePopup.openPopup();
  validatorAddForm.disableSubmitButton();
};

buttonEditProfile.addEventListener("click", openProfilePopup);
buttonAddImage.addEventListener("click", openAddImagePopup);
