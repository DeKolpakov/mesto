
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
