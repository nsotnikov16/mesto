//функция скрытия ошибки 
const hideInputError = (formElement, inputElement) => {
  const { inputErrorClass, errorActiveClass } = config;
  // найдем ошибочный элемент
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //скрываем ошибку
  inputElement.classList.remove(inputErrorClass);
  
  //удаляем спан
  errorElement.classList.remove(errorActiveClass);
  errorElement.textContent = "";
};

//функция показа ошибки 
const showInputError = (formElement, inputElement) => {
  const { inputErrorClass, errorActiveClass } = config;
  // найдем ошибочный элемент
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  //показываем ошибку
  inputElement.classList.add(inputErrorClass);

  //подключаем спан
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorActiveClass);
};

//функция проверки каждого инпута на валидность
// передаем еще и форму для дальнейшего поиска спан ошибки
const checkInputValidity = (formElement, inputElement, config) => {
  // проверить инпут на валидность
  // если валидный - прячем ошибку, иначе показываем ошибку
  
  if(inputElement.validity.valid) {
    // прячем ошибку
    hideInputError(formElement, inputElement, config);
  } else {
    // показать ошибку
    showInputError(formElement, inputElement, config);
  }
};

// общая функция проверки всех инпутов формы на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};

//функция активности кнопки
const toggleButtonState= (buttonElement, inputList) => {
  // если форма валидная - кнопка активна, иначе неактивна
  if (hasInvalidInput(inputList)) {
    // активна
    buttonElement.disabled = true;
  } else {
    // неактивна
    buttonElement.disabled = false;
  };
};

//функция добавления слушателей на страницу
const setEventListeners = (formElement, config) => {
  const {inputSelector, submitButtonSelector, ...restConfig} = config;
  //убираем стандартную перезагрузку страницы при нажатии на кнопку
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  // Найти все инпуты внутри формы
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  // найдем кнопку отправки формы
  const buttonElement = formElement.querySelector(submitButtonSelector);

  // добавить слушателей для каждого инпута
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // проверить инпут на валидность и активность кнопки
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(buttonElement, inputList);
      });
  });
  // добавим проверку активности кнопки при старте
  toggleButtonState(buttonElement, inputList);
};

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  // Найти все формы на странице
  const formList = Array.from(document.querySelectorAll(formSelector));

  // добавить слушателей на каждую форму
  formList.forEach(formElement => {
    setEventListeners(formElement, restConfig);
  })
};