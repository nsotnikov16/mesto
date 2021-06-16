export default class FormValidator {
    constructor (config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners();
    }

    _setEventListeners () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
         
          this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
              this.toggleButtonState();
              });
          });

          this.toggleButtonState();
    }

    _checkInputValidity (inputElement){
        if(inputElement.validity.valid) {
          this.hideInputError(inputElement);
        } else {
          this._showInputError(inputElement);
        }
    };

    hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorActiveClass);
    errorElement.textContent = "";
    };
  
    _showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorActiveClass);
    };

    _hasInvalidInput () {
        return this._inputList.some(inputElement => !inputElement.validity.valid);
      };

    toggleButtonState () {
        if (this._hasInvalidInput(this._inputList)) {
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.disabled = false;
        }
    };
}