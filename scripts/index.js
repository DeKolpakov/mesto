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
const formProfile = popupProfile.querySelector(".popup__form_type_profile");
const buttonCloseProfile = popupProfile.querySelector(".popup__button-close_type_profile");
const nameInputPopup = formProfile.querySelector("#profile-name");
const descriptionInputPopup = formProfile.querySelector("#profile-description");

const popupAddImage = document.querySelector(".popup_type_addimage");
const buttonAddImage = document.querySelector(".profile__button-add");
const buttonCloseAddImage = document.querySelector(".popup__button-close_type_add");

const galery = document.querySelector(".galery");
const templateGalery = document.querySelector(".template__galery-item");
const galeryTitle = templateGalery.querySelector(".galery__title");

const popupImageName = popupAddImage.querySelector("#image-name");
const popupImageLink = popupAddImage.querySelector("#image-link");

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
    closePopup(popupProfile);
  }
};

//____________________POPUP-FULL________________________________

const closePopupFullimage = () => {
  closePopup(popupFullImage);
};

const closeOverlayPopupFullimage = (event) => {
  if (event.target === event.currentTarget) {
    closePopupFullimage();
  }
};

//__________________POPUP-ADD____________________________________

const openedPopupAdd = () => {
  openPopup(popupAddImage);
};

const closePopupAdd = () => {
  closePopup(popupAddImage);
};

const closeOverlayPopupAdd = (event) => {
  if (event.target === event.currentTarget) {
    closePopupAdd();
  }
};

//____________________EDIT-PROFILE________________________________

function handleSubmitFormProfile(event) {
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

  const newElement = createCard({ name: popupImageName.value, link: popupImageLink.value });
  galery.prepend(newElement);

  closePopupAdd();
  event.target.reset();
};

renderCards();

//______________________________________________________________________

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonCloseProfile.addEventListener("click", closePopupProfile);
popupProfile.addEventListener("click", closePopupProfileByOverlay);

fullImageButtonClose.addEventListener("click", closePopupFullimage);
popupFullImage.addEventListener("click", closeOverlayPopupFullimage);

buttonAddImage.addEventListener("click", openedPopupAdd);
buttonCloseAddImage.addEventListener("click", closePopupAdd);
popupAddImage.addEventListener("click", closeOverlayPopupAdd);

formProfile.addEventListener("submit", handleSubmitFormProfile);

popupAddImage.addEventListener("submit", submitFormNewCard);
