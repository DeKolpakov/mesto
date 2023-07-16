const nameOutputProfile = document.querySelector(".profile__name");
const descriptionOutputProfile = document.querySelector(".profile__description");
const popupButtonOpen = document.querySelector(".profile__button-open");

const popup = document.querySelector(".popup");
const formElement = popup.querySelector(".popup__form");
const popupButtonClose = popup.querySelector(".popup__button-close");
const nameInputPopup = formElement.querySelector(".popup__input-name");
const descriptionInputPopup = formElement.querySelector(".popup__input-description");

function popupToggleOpened() {
  nameInputPopup.value = nameOutputProfile.textContent;
  descriptionInputPopup.value = descriptionOutputProfile.textContent;
  popup.classList.toggle("popup_opened");
}

popupButtonOpen.addEventListener("click", popupToggleOpened);
popupButtonClose.addEventListener("click", popupToggleOpened);

function popupCloseByOverlay(event) {
  if (event.target == event.currentTarget) {
    popupToggleOpened();
  }
}

popup.addEventListener("click", popupCloseByOverlay);

function handleFormSubmit(event) {
  event.preventDefault();
  nameOutputProfile.textContent = nameInputPopup.value;
  descriptionOutputProfile.textContent = descriptionInputPopup.value;
  popupToggleOpened();
}

formElement.addEventListener("submit", handleFormSubmit);
