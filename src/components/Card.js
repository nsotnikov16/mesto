export default class Card {
    constructor(
      data,
      template,
      isOwner,
      putLikeRequest,
      deleteLikeRequest,
      handleCardClick,
      confirm
    ) {
      this._data = data;
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes.length;
      this.id = data._id;
      this._template = document.querySelector(template).content;
      this._handleCardClick = handleCardClick;
      this._isOwner = isOwner;
      this._confirm = confirm;
      this._putLike = putLikeRequest;
      this._deleteLike = deleteLikeRequest;
    }
  
    _getTemplate() {
      const cardElement = this._template
        .querySelector(".elements__place")
        .cloneNode(true);
      return cardElement;
    }
  
    _makeElements() {
      this._element = this._getTemplate();
  
      this._trashButton = this._element.querySelector(".elements__trash-btn");
      this._likeButton = this._element.querySelector(".elements__like");
      this._likeInfo = this._element.querySelector(".elements__like-value");
      this._photo = this._element.querySelector(".elements__photo");
      this._photoTitle = this._element.querySelector(".elements__title");
    }
  
    _handleRemoveCard() {
      this._element.remove();
    }
  
    _toggleLikeCard() {
      this._likeButton.classList.toggle("elements__like_active");
    }
  
    _handleLikeCard() {
      if (this._likeButton.classList.contains("elements__like_active")) {
        this._deleteLike().then((result) => {
          this._likeInfo.textContent = result;
          this._toggleLikeCard();
        });
      } else {
        this._putLike().then((result) => {
          this._likeInfo.textContent = result;
          this._toggleLikeCard();
        });
      }
    }
  
    _setEventListeners() {
      this._trashButton.addEventListener("click", () =>
        this._confirm(this.id, this._element)
      );
      this._likeButton.addEventListener("click", () => this._handleLikeCard());
      this._photo.addEventListener("click", () => this._handleCardClick());
    }
  
    generateCard() {
      this._makeElements();
      this._setEventListeners();
      this._photo.src = this._link;
      this._photo.alt = this._name;
      this._photoTitle.textContent = this._name;
      this._likeInfo.textContent = this._likes;
  
      if (this._data.owner._id !== this._isOwner._id) {
        this._trashButton.remove();
      }
  
      if (this._data.likes.find((item) => item._id === this._isOwner._id)) {
        this._toggleLikeCard();
      }
  
      return this._element;
    }
  }
  