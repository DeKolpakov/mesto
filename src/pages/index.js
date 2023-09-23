import './index.css';
import {initialCards} from "../components/utils/initialCard.js";
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
  buttonCloseFullImage,
  titleFullImage,
  photoFullImage,
} from "../components/utils/constants.js";

//__POPUP_______________________________________________________________________________

//___POPUP-FULLIMAGE______________________________________________________________________

const popupFullImage = new PopupWithImage(".popup_type_fullimage");
popupFullImage.setEventListeners();

const openFullImage = (link, name) => {
  popupFullImage.openPopup(link, name);
};

//__POPUP-PROFILE________________________________________________________________________

const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  descriptionSelector: "#profile-description",
});

//__EDIT-PROFILE_________________________________________________________________________

const editProfilePopup = new PopupWithForm(".popup_type_profile", {
  handleSubmitForm: (profileData) => {
    userInfo.setUserInfo({
      name: profileData.name,
      description: profileData.description,
    });
    popupProfile.close();
  },
});

editProfilePopup.setEventListeners();


//__INITIALRENDER________________________________________________________________________

const initialRender = new Section(
  {
    item: initialCards,
    renderer: (data) => {
      const cardElement = new Card(data, ".template__galery-item", openFullImage);
      initialRender.addCard(cardElement.createCard());
    },
  },
  ".galery"
);

initialRender.rendererCards();

//__NEWCARD-CREATE________________________________________________________________________

const createNewCard = (data) => {
  const newCardElement = new Card(data, ".template__galery-item", openFullImage);
  return newCardElement.createCard();
};

//___NEWCARD-SUBMIT______________________________________________________________________

const submitNewCard = new PopupWithForm(".popup_type_addimage", {
  handleSubmitForm: () => {
    initialRender.addCard(
      createNewCard(
        {
          name: nameAddImageForm.value,
          link: linkAddImageForm.value,
        },
        ".template__galery-item",
        openFullImage
      )
    );
    submitNewCard.close();
  },
});

submitNewCard.setEventListeners();

//__VALIDATION___________________________________________________________________________

const validatorProfileForm = new FormValidator(validationConfig, formProfile);
const validatorAddForm = new FormValidator(validationConfig, formAddImage);

validatorAddForm.enableValidation();
validatorProfileForm.enableValidation();

//__LISTENERS___________________________________________________________________________

const editProfileListener = () => {
  popupProfile.openPopup()
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
   
}

//___POPUP-ADD___________________________________________________________________________

const addCardListener = () => {
  openPopup(popupAddImage);
  validatorAddForm.disableSubmitButton()
}

buttonEditProfile.addEventListener("click", editProfileListener);

buttonAddImage.addEventListener("click", addCardListener);
