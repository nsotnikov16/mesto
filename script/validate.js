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
















































/* const hideInputError = (formElement, inputElement, config) => {
  // hide error
  // find error elemet
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorActiveClass);
  errorElement.textContent = '';
}

const showInputError = (formElement, inputElement, config) => {
  // show error
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorActiveClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
  // check input is valid
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
  // if valid, hide error else show error
}

const hazInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (buttonElement, inputList) => {
  // if form valid enable button else disable
  if (hazInvalidInput(inputList)) {
    // disable
    buttonElement.disabled = true;
  } else {
    // enable
    buttonElement.disabled = false;
  }
}

// const checkPasswordConfirm = (formElement) => {
//   // find fields
//   const passwordElement = formElement.querySelector('#new-password');
//   const passwordConfirmElement = formElement.querySelector('#new-password-confirm');

//   if (!passwordElement || !passwordConfirmElement) return;

//   if (passwordElement.value === passwordConfirmElement.value) {
//     // hide confirm error
//     passwordConfirmElement.setCustomValidity('');
//   } else {
//     // show confirm error
//     passwordConfirmElement.setCustomValidity('Пароли не совпадают!');
//   }
// }

const setEventListeners = (formElement, config) => {
  // prevent page reload on form submit
  const { inputSelector, submitButtonSelector, ...restConfig } = config;

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  
  // find all inputs
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  // find submit button
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      // check input is valid
      // checkPasswordConfirm(formElement);
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(buttonElement, inputList);
    });
  })
  // add listeners for each input

  // set initial button state
  toggleButtonState(buttonElement, inputList);
}

const enableValidation = ({ formSelector, ...restConfig }) => {
  const { formSelector, ...restConfig } = config;
  // find all forms
  const formList = Array.from(document.querySelectorAll(formSelector));

  // set event lesteners each form
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  })
}; */