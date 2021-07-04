import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor ( {selectorPopup}, textButtonDefault, textButtonLoading, submitForm) {
        super({selectorPopup});
        this._submitForm = submitForm;
        this._inputList = Array.from(this.form.querySelectorAll('.popup__input'));
        this._buttonSave = this._popupElement.querySelector('.popup__save')
        this.other = null;
        this.textButtonDefault = textButtonDefault;
        this._textButtonLoading = textButtonLoading;
    }

    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }
    
    editTextButton(text) {
        this._buttonSave.textContent = text
    }

    _handleSubmitForm (evt) {
        evt.preventDefault();
        this.editTextButton(this._textButtonLoading)
        this._submitForm(this._getInputValues());
        this.close()
    }

    setEventListeners () {
        super.setEventListeners();
        this.form = this._popupElement.querySelector('.popup__form');
        this.form.addEventListener('submit', (evt) => this._handleSubmitForm(evt))
    }

    close () {
        super.close();
        this.form.reset();
    }

}