import { codeEscape } from "../utils/constants.js";

export default class Popup {
    constructor ({ selectorPopup }) {
        this._popupElement = document.querySelector(selectorPopup);
        this._handlerEsc = this._handleEscClose.bind(this);
        this.setEventListeners();
    }

    open () {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEsc);
    }

    close () {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handlerEsc);
    }

    _handleEscClose (evt) {
        if (evt.keyCode === codeEscape) {
            this.close ();
        }
    }

    _handleOverlayClick (evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    showErrorServer(err) {
        this._title = this._popupElement.querySelector('.popup__title');
        this._title.textContent = err;
        this._title.style.margin = 0;
        this.open();
    }

    setEventListeners () {
        this._closeButton = this._popupElement.querySelector('.close-btn');
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}