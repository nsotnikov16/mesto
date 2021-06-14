import Popup from './Popup.js'
import FormValidator from './FormValidator.js';
import {config} from '../utils/constants.js';

export default class PopupWithForm extends Popup {
    constructor ( {selectorPopup}, submitForm) {
        super({selectorPopup});
        this.submitForm = submitForm;
        this._inputList = Array.from(this._selectorPopup.querySelectorAll('.popup__input'));
        this.inputName = this._inputList[0];
        this.inputInfo = this._inputList[1];
    }

    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }
    
    open() {
        super.open()
        const validator = new FormValidator (config, this._selectorPopup);
        validator.enableValidation();
        this._inputList.forEach(input => {
            validator.hideInputError(input)
        })
    }

    _handleSubmitForm (evt) {
        evt.preventDefault();
        this.submitForm(this._getInputValues());
        this.close()
    }

    setEventListeners () {
        super.setEventListeners();
        this._form = this._selectorPopup.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => this._handleSubmitForm(evt));
    }

    close () {
        super.close();
        this._form.reset();
    }
}