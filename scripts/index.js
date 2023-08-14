const initialCards = [
  {
    name: "порт Батуми",
    link: "./images/galery/batumi.png",
  },
  {
    name: "Калимантан",
    link: "./images/galery/borneo.png",
  },
  {
    name: "Португалия",
    link: "./images/galery/caba-roca.png",
  },
  {
    name: "Мальдивы",
    link: "./images/galery/maldives.png",
  },
  {
    name: "Раджа-Ампат архипелаг",
    link: "./images/galery/raja_ampat.png",
  },
  {
    name: "Индонезия",
    link: "./images/galery/indonesia.png",
  },
];

//______________________________________________________________________

const nameOutputProfile = document.querySelector(".profile__name");
const descriptionOutputProfile = document.querySelector(".profile__description");
const buttonEditProfile = document.querySelector(".profile__button-open");

const popupProfile = document.querySelector(".popup_type_profile");
const profileForm = popupProfile.querySelector("#profile-form");
const buttonCloseProfile = popupProfile.querySelector(".popup__button-close_type_profile");
const nameInputPopup = profileForm.querySelector("#profile-name");
const descriptionInputPopup = profileForm.querySelector("#profile-description");

const popupAddImage = document.querySelector(".popup_type_addimage");
const addImageForm = popupAddImage.querySelector("#addimage-form");
const buttonAddImage = document.querySelector(".profile__button-add");
const buttonCloseAddImage = document.querySelector(".popup__button-close_type_add");
const addImageName = popupAddImage.querySelector("#image-name");
const addImageLink = popupAddImage.querySelector("#image-link");

const galery = document.querySelector(".galery");
const templateGalery = document.querySelector(".template__galery-item");
const galeryTitle = templateGalery.querySelector(".galery__title");

const popupFullImage = document.querySelector(".popup_type_fullimage");
const fullImageButtonClose = popupFullImage.querySelector(".popup__button-close_type_fullimage");
const fullImageTitle = popupFullImage.querySelector(".popup__name-fullimage");
const fullImagePhoto = popupFullImage.querySelector(".popup__photo-fullimage");

//____________________POPUP________________________________

const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
};

const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
};

//____________________POPUP-PROFILE________________________________

const lookupTextProfileInPopup = () => {
  nameInputPopup.value = nameOutputProfile.textContent;
  descriptionInputPopup.value = descriptionOutputProfile.textContent;
};

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

const closePopupProfileByEsc = (event) => {
  if (event.key === 'Escape') {
    closePopupProfile();
  }
};

//____________________POPUP-FULL________________________________

const closePopupFullImage = () => {
  closePopup(popupFullImage);
};

const closeOverlayPopupFullImage = (event) => {
  if (event.target === event.currentTarget) {
    closePopupFullImage();
  }
};

const closePopupFullImageByEsc = (event) => {
  if (event.key === 'Escape') {
    closePopupFullImage();
  }
};

//__________________POPUP-ADD____________________________________

const openedPopupAdd = () => {
  openPopup(popupAddImage);
};

const closePopupAdd = (evt) => {
  closePopup(popupAddImage);
  addImageForm.reset()
};

const closeOverlayPopupAdd = (event) => {
  if (event.target === event.currentTarget) {
    closePopupAdd();
  }
};

const closePopupAddByEsc = (event) => {
  if (event.key === 'Escape') {
    closePopupAdd();
  }
};


//____________________EDIT-PROFILE________________________________

function handleSubmitProfileForm(event) {
  event.preventDefault();
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
  closePopupProfile();
}

//____________________RENDER________________________

const renderCards = () => {
  initialCards.forEach((item) => {
    galery.append(createCard(item));
  });
};

//______________________INIT____________________________________

const createCard = (item) => {
  const element = templateGalery.content.cloneNode(true);

  const title = element.querySelector(".galery__title");
  const image = element.querySelector(".galery__photo");
  const likeButton = element.querySelector(".galery__button-like");
  const deleteButton = element.querySelector(".galery__button-delete");

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
    fullImagePhoto.src = item.link;
    fullImageTitle.textContent = item.name;
    fullImagePhoto.alt = item.name;
    openPopup(popupFullImage);
  };

  deleteButton.addEventListener("click", removeCard);
  likeButton.addEventListener("click", toggleLike);
  image.addEventListener("click", openFullImage);

  return element;
};

//_______________________NEW_CARD_______________________________________

const submitFormNewCard = (event) => {
  event.preventDefault();
  const newElement = createCard({ name: addImageName.value, link: addImageLink.value });
  galery.prepend(newElement);
  closePopupAdd();
};

renderCards();

//______________________________________________________________________

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonCloseProfile.addEventListener("click", closePopupProfile);
popupProfile.addEventListener("click", closePopupProfileByOverlay);
document.addEventListener("keydown", closePopupProfileByEsc);

fullImageButtonClose.addEventListener("click", closePopupFullImage);
popupFullImage.addEventListener("click", closeOverlayPopupFullImage);
document.addEventListener("keydown", closePopupFullImageByEsc);

buttonAddImage.addEventListener("click", openedPopupAdd);
buttonCloseAddImage.addEventListener("click", closePopupAdd);
popupAddImage.addEventListener("click", closeOverlayPopupAdd);
document.addEventListener("keydown", closePopupAddByEsc);

profileForm.addEventListener("submit", handleSubmitProfileForm);

popupAddImage.addEventListener("submit", submitFormNewCard);
