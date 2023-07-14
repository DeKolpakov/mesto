// Объявляем переменные
const popup = document.querySelector(".popup");
const popupButtonOpen = document.querySelector(".profile__open-popup");
const popupButtonClose = popup.querySelector(".popup__button-close");

// Создаем функцию для добавления класса
function popupToggle() {
  popup.classList.toggle("popup_opened");
}

// Устанавливаем слушатель клика с применением функции
popupButtonOpen.addEventListener("click", popupToggle);
popupButtonClose.addEventListener("click", popupToggle);

// Создаем функцию сравнения таргетов для закрытия попапа
function popupCloseByOverlay(event) {
  if (event.target == event.currentTarget) {
    popupToggle();
  }
}

// Устанавливаем слушатель клика с применением функции
popup.addEventListener("click", popupCloseByOverlay);

// Находим форму в DOM
const formElement = document.querySelector(".popup__container");

// Находим поля формы в DOM
const nameInput = formElement.querySelector(".popup__input-name");
const descriptionInput = formElement.querySelector(".popup__input-description");

// Находим поля для ввода информации
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  // Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;

  // Вставьте новые значения с помощью textContent
  profileDescription.textContent = descriptionValue;
  profileName.textContent = nameValue;

  // Закрываем форму
  popupToggle();

  // Очищаем форму
  evt.target.reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
