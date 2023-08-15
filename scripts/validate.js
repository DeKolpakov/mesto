//______________________функция-включения-валидации______________________________

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, inputErrorClass, errorClass}) => {
  const formsAll = Array.from(document.querySelectorAll(formSelector));
  formsAll.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, inputErrorClass, errorClass);
  });
};

//______________________добавление-ошибки____________________

const validationInput = (formElement, inputElement, inputErrorClass, errorClass) => {
  const inputError = formElement.querySelector(`#${inputElement.id}_error`);
  if (inputElement.validity.valid) {
    inputElement.classList.remove(inputErrorClass);
    inputError.classList.remove(errorClass);
    inputError.textContent = "";
  } else {
    inputElement.classList.add(inputErrorClass);
    inputError.classList.add(errorClass);
    inputError.textContent = inputElement.validationMessage;
  }
};

//_____________________валидация-кнопки__________________________________

const submitButtonState = (inputsAll, submitButton, inactiveButtonClass, activeButtonClass) => {
  const invalidInputs = inputsAll.some((inputElement) => !inputElement.validity.valid);
  if (invalidInputs) {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add(inactiveButtonClass);
    submitButton.classList.remove(activeButtonClass);
  } else {
    submitButton.removeAttribute("disabled", false);
    submitButton.classList.add(activeButtonClass);
    submitButton.classList.remove(inactiveButtonClass);
  }
};

//_____________________слушатели_________________________________________

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, inputErrorClass, errorClass) => {
  const inputsAll = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);

  submitButtonState(inputsAll, submitButton, inactiveButtonClass, activeButtonClass);

  inputsAll.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validationInput(formElement, inputElement, inputErrorClass, errorClass);
      submitButtonState(inputsAll, submitButton, inactiveButtonClass, activeButtonClass);
    });
  });
};

//_________________________________________________________________________

//______________________запуск-валидации______________________________

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_invalid",
  activeButtonClass: "popup__button-save_valid",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-span_error",
});

/* 
//____________________валидация по вебинару________________________________

const validateInput = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.id}_error`);
  const parentForms = inputElement.parentNode;

  if (inputElement.checkValidity()) {
    errorElement.textContent = "";
    inputElement.classList.remove('popup__input_error')
  } else {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add('popup__input_error')
  }

  if (parentForms.checkValidity()) {
    submitButtonState(parentForms, true);
  } else {
    submitButtonState(parentForms, false);
  }
};

const validateForm = (event) => {
  event.preventDefault();
  validateInput(addImageName);
  validateInput(addImageLink);
  validateInput(nameInputPopup);
  validateInput(descriptionInputPopup);

  //if (parentForms.checkValidity()) {
    //parentForms.reset();
  //}
};

const submitButtonState = (formElement, inActive) => {
  const submitButton = formElement.querySelector("#submit-button");

  if (inActive) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.add("popup__button-save_valid");
    submitButton.classList.remove("popup__button-save_invalid");
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("popup__button-save_invalid");
    submitButton.classList.remove("popup__button-save_valid");
  }
};

const validateFormInput = (evt) => {
  validateInput(evt.target);
};

profileForm.addEventListener("submit", validateForm);
addImageForm.addEventListener("submit", validateForm);
profileForm.addEventListener("input", validateFormInput);
addImageForm.addEventListener("input", validateFormInput);
 */
