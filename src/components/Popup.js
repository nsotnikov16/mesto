import { codeEscape } from "../utils/constants.js";

export default class Popup {
    constructor ({ selectorPopup }) {
        this.popupElement = document.querySelector(selectorPopup);
        this._handlerEsc = this._handleEscClose.bind(this);
        this.setEventListeners();
    }

    open () {
        this.popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEsc);
    }

    close () {
        this.popupElement.classList.remove('popup_opened');
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

    setEventListeners () {
        this._closeButton = this.popupElement.querySelector('.close-btn');
        this._closeButton.addEventListener('click', () => this.close());
        this.popupElement.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}