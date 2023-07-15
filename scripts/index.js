// Открытие/закрытие формы____________________________________________

// Объявляем переменные и находим элементы
const popup = document.querySelector(".popup");
const popupButtonOpen = document.querySelector(".profile__button-open");
const popupButtonClose = popup.querySelector(".popup__button-close");

// Создаем функцию для добавления/удаления класса
function popupToggleOpened() {
  popup.classList.toggle("popup_opened");
}

// Устанавливаем слушатель клика по кнопке с применением функции
popupButtonOpen.addEventListener("click", popupToggleOpened);
popupButtonClose.addEventListener("click", popupToggleOpened);

// Создаем функцию сравнения таргетов для закрытия попапа по нажатию на оверлей
function popupCloseByOverlay(event) {
  if (event.target == event.currentTarget) {
    popupToggleOpened();
  }
}

// Устанавливаем слушатель клика с применением функции
popup.addEventListener("click", popupCloseByOverlay);

// Заполнение формы_____________________________________________________

// Находим форму в DOM
const formElement = document.querySelector(".popup__container");

// Находим поля формы для ввода текста
const nameInputPopup = formElement.querySelector(".popup__input-name");
const descriptionInputPopup = formElement.querySelector(".popup__input-description");

// Находим поля профиля для вывода текста
const nameOutputProfile = document.querySelector(".profile__name");
const descriptionOutputProfile = document.querySelector(".profile__description");

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  // Получите значение полей jobInput и nameInputPopup из свойства value
  const nameValue = nameInputPopup.value;
  const descriptionValue = descriptionInputPopup.value;

  // Вставьте новые значения с помощью textContent
  nameOutputProfile.textContent = nameValue;
  descriptionOutputProfile.textContent = descriptionValue;

  // Закрываем форму
  popupToggleOpened();

  // Очищаем форму
  event.target.reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
