const nameOutputProfile = document.querySelector(".profile__name");
const descriptionOutputProfile = document.querySelector(".profile__description");
const popupButtonOpen = document.querySelector(".profile__button-open");

const popup = document.querySelector(".popup");
const formElement = popup.querySelector(".popup__form");
const popupButtonClose = popup.querySelector(".popup__button-close");
const nameInputPopup = formElement.querySelector("#profile-name");
const descriptionInputPopup = formElement.querySelector("#profile-description");

function popupOpened() {
  nameInputPopup.value = nameOutputProfile.textContent;
  descriptionInputPopup.value = descriptionOutputProfile.textContent;
  popup.classList.toggle("popup_opened");
}

popupButtonOpen.addEventListener("click", popupOpened);

function popupClose() {
  popup.classList.toggle("popup_opened");
}

popupButtonClose.addEventListener("click", popupClose);

function popupCloseOverlay(event) {
  if (event.target == event.currentTarget) {
    popupClose();
  }
}

popup.addEventListener("click", popupCloseOverlay);

function handleFormSubmit(event) {
  event.preventDefault();
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
  popupClose();
}

formElement.addEventListener("submit", handleFormSubmit);

// ____________________________GALERY_____________________________________

const popupAdd = document.querySelector(".popup-add");
const popupButtonAdd = document.querySelector(".profile__button-add");
const popupButtonCloseAdd = document.querySelector(".popup__button-close-add");

const galery = document.querySelector(".galery");
const templateGalery = document.querySelector(".template__galery-item");
const galeryTitle = templateGalery.querySelector(".galery__title");

const popupImageName = popupAdd.querySelector("#image-name");
const popupImageLink = popupAdd.querySelector("#image-link");

const popupFullImage = document.querySelector(".fullimage");
const fullImageButtonClose = popupFullImage.querySelector(".fullimage__button-close");
const fullImageTitle = popupFullImage.querySelector(".fullimage__title");
const fullImagePhoto = popupFullImage.querySelector(".fullimage__photo");

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

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.name

  element.querySelector(".galery__button-like").addEventListener("click", function (event) {
    event.target.classList.toggle("galery__button-like_active");
  });

  element.querySelector(".galery__button-delete").addEventListener("click", function (event) {
    event.target.closest(".galery__item").remove();
  });

  const openFullImage = () => {
    fullImagePhoto.src = item.link;
    fullImageTitle.textContent = item.name;
    fullImagePhoto.alt = item.name;

    popupFullImage.classList.toggle("fullimage__opened");
  };

  image.addEventListener("click", openFullImage);

  return element;
};

//_______________________NEW_CARD_______________________________________

const newCard = (event) => {
  event.preventDefault();

  const newElement = createCard({ name: popupImageName.value, link: popupImageLink.value });
  galery.prepend(newElement);

  popupAddClose();
  event.target.reset();
};

popupAdd.addEventListener("submit", newCard);

renderCards();
//____________________POPUP-FULL________________________________

const fullImageClose = () => {
  popupFullImage.classList.toggle("fullimage__opened");
};
fullImageButtonClose.addEventListener("click", fullImageClose);

function fullImageCloseOverlay(event) {
  if (event.target == event.currentTarget) {
    fullImageClose();
  }
}
popupFullImage.addEventListener("click", fullImageCloseOverlay);

//__________________POPUP-ADD____________________________________

function popupAddOpened() {
  popupAdd.classList.toggle("popup_opened");
}
popupButtonAdd.addEventListener("click", popupAddOpened);

function popupAddClose() {
  popupAdd.classList.toggle("popup_opened");
}
popupButtonCloseAdd.addEventListener("click", popupAddClose);

function popupAddCloseOverlay(event) {
  if (event.target == event.currentTarget) {
    popupAddClose();
  }
}
popupAdd.addEventListener("click", popupAddCloseOverlay);
