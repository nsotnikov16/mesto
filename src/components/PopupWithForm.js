import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor ( {selectorPopup}, submitForm) {
        super({selectorPopup});
        this._submitForm = submitForm;
        this._inputList = Array.from(this.form.querySelectorAll('.popup__input'));
    }

    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }
    
    _handleSubmitForm (evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close()
    }

    setEventListeners () {
        super.setEventListeners();
        this.form = this._popupElement.querySelector('.popup__form');
        this.form.addEventListener('submit', (evt) => this._handleSubmitForm(evt));
    }

    close () {
        super.close();
        this.form.reset();
    }
}