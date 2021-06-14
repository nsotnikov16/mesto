import { codeEscape } from "../utils/constants.js";

export default class Popup {
    constructor ({ selectorPopup }) {
        this.selectorPopup = document.querySelector(selectorPopup);
        this.setEventListeners();
    }

    open () {
        this.selectorPopup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscSlose.bind(this));
    }

    close () {
        this.selectorPopup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscSlose.bind(this));
    }

    _handleEscSlose (evt) {
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
        this._closeButton = this.selectorPopup.querySelector('.close-btn');
        this._closeButton.addEventListener('click', () => this.close());
        this.selectorPopup.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}