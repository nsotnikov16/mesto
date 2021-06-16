import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    open (item) {
        super.open();
        this._photo = this._popupElement.querySelector('.popup-img__image');
        this._title = this._popupElement.querySelector('.popup-img__title');
        this._photo.src = item.link;
        this._photo.alt = item.name;
        this._title.textContent = item.name;
    }
}