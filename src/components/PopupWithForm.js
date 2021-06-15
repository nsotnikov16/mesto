import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor ( {selectorPopup}, submitForm) {
        super({selectorPopup});
        this.submitForm = submitForm;
        this.inputList = Array.from(this.form.querySelectorAll('.popup__input'));
        this.inputName = this.inputList[0]; // используется в index.js!
        this.inputInfo = this.inputList[1]; // используется в index.js!
    }

    _getInputValues () {
        this._formValues = {};
        this.inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }
    
    _handleSubmitForm (evt) {
        evt.preventDefault();
        this.submitForm(this._getInputValues());
        this.close()
    }

    setEventListeners () {
        super.setEventListeners();
        this.form = this.popupElement.querySelector('.popup__form');
        this.form.addEventListener('submit', (evt) => this._handleSubmitForm(evt));
    }

    close () {
        super.close();
        this.form.reset();
    }
}