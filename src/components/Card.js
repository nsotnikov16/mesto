export default class Card {
    constructor (data, template, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(template).content;
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate () {
        const cardElement = this._template.querySelector('.elements__place').cloneNode(true);
        return cardElement;
    }

    _makeElements () {
        this._element = this._getTemplate();

        this._trashButton = this._element.querySelector('.elements__trash-btn'); 
        this._likeButton = this._element.querySelector('.elements__like');
        this._photo = this._element.querySelector('.elements__photo');
        this._photoTitle = this._element.querySelector('.elements__title');
    }

    _handleRemoveCard () {
        this._element.remove();
    }

    _handleLikeCard () {
        this._likeButton.classList.toggle('elements__like_active'); 
    }

    _setEventListeners () {
        this._trashButton.addEventListener('click', () => this._handleRemoveCard());
        this._likeButton.addEventListener('click', () => this._handleLikeCard());
        this._photo.addEventListener('click', () => this._handleCardClick());
    }

    generateCard () {
        this._makeElements ();
        this._setEventListeners ();
        this._photo.src = this._link;
        this._photo.alt = this._name;
        this._photoTitle.textContent = this._name;

        return this._element;
    }
}