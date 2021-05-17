//КОНСТАНТЫ:


//ДЛЯ ПОПАПА ПРОФИЛЯ
//------------------------------------
const editButton = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup-profile');
const closePopupProfileButton = document.querySelector('.close-profile');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');
const popupUserName = document.querySelector('.popup__input_field_username');
const popupInfo = document.querySelector('.popup__input_field_info');
const saveProfileButton = document.querySelector('.save-profile');
const formProfile = document.querySelector('.form-profile');

// -----------------------------------

//ДЛЯ ПОПАПА СОЗДАНИЯ КАРТОЧКИ
//------------------------------------
const addButton = document.querySelector('.profile__add-btn');
const popupNewPlace = document.querySelector('.popup-newplace');
const closePopupNewPlaceButton = document.querySelector('.close-newplace');
const popupNamePlace = document.querySelector('.popup__input_field_nameplace');
const popupLinkPlace = document.querySelector('.popup__input_field_link');
const saveNewPlaceButton = document.querySelector('.save-newplace');
const formNewPlace = document.querySelector('.form-newplace');
const newPlaceTemplate = document.querySelector('#newplace').content;
const elements = document.querySelector('.elements');
//------------------------------------

//ДЛЯ ПОПАПА С ИЗОБРАЖЕНИЕМ
//---------------------------------------
const popupWithImage = document.querySelector('.popup-img');
const popupWithImageTitle = document.querySelector('.popup-img__title');
const popupWithImagePhoto = document.querySelector('.popup-img__image');
const closePopupWithImageButton = document.querySelector('.popup-img__close');
//-----------------------------------
const codeEscape = 27;
//-----------------------------

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
  }; 

//ФУНКЦИИ 
//------------------------------------------
enableValidation(config);

function openPopup(popup) {
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', closeByEsc); 
}

function openPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
    openPopup(popupProfile);
}

function openPopupNewPlace () {
    openPopup(popupNewPlace);
    popupNamePlace.value = "";
    popupLinkPlace.value = "";
    hideInputError(formNewPlace, popupNamePlace);
    hideInputError(formNewPlace, popupLinkPlace);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', closeByEsc); //по сути здесь же нет необходимости удалять слушатель, для формальности же только будет правильно. Или я не прав? Может еще чем-то грозит?)
}

function closePopupProfile () {
    closePopup(popupProfile);
}

function closePopupNewPlace () {
    closePopup(popupNewPlace);
}

function closePopupWithImage () {
    closePopup(popupWithImage);
}

function closeByEsc (evt) {
    if (evt.keyCode === codeEscape) {
        closePopup(popupProfile) || closePopup(popupNewPlace) || closePopup(popupWithImage) ;
    }
}

function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    };
}

function handleSubmitProfile (evt) {
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup(popupProfile);
}

function handleRemoveCard(evt) {
    evt.target.closest('.elements__place').remove();
};

function handleLikeCard (evt) {
    evt.target.classList.toggle('elements__like_active');
}

function openPopupWithImage (evt) {
    openPopup(popupWithImage);
    popupWithImagePhoto.src = evt.target.src;
    popupWithImagePhoto.alt = evt.target.alt;
    popupWithImageTitle.textContent = evt.target.alt;
}

function createCard(link, name) {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    const trashButton = newPlaceElement.querySelector('.elements__trash-btn');
    const likeButton = newPlaceElement.querySelector('.elements__like');
    const photo = newPlaceElement.querySelector('.elements__photo');
    const photoTitle = newPlaceElement.querySelector('.elements__title');
    
    photo.src = link;
    photo.alt = name;
    photoTitle.textContent = name;
    
    trashButton.addEventListener('click', handleRemoveCard);
    likeButton.addEventListener('click', handleLikeCard);
    photo.addEventListener('click', openPopupWithImage);

    return newPlaceElement;
}

function handleSubmitNewPlace (evt) {
    evt.preventDefault();
    const card = createCard(popupLinkPlace.value, popupNamePlace.value);
    elements.prepend(card);
    closePopup(popupNewPlace);
    popupNamePlace.value = "";
    popupLinkPlace.value = "";
    saveNewPlaceButton.disabled = true;
}

//----------------------------------------

//forEACH
//---------------------------------------
initialCards.forEach(function (item) {
    const card = createCard(item.link, item.name);
    elements.append(card);
});
//---------------------------------------

//ОБРАБОТЧИКИ СОБЫТИЙ
//-------------------------------------------
editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupNewPlace);
formNewPlace.addEventListener('submit', handleSubmitNewPlace);
formProfile.addEventListener('submit', handleSubmitProfile);
closePopupProfileButton.addEventListener('click', closePopupProfile);
closePopupNewPlaceButton.addEventListener('click', closePopupNewPlace);
closePopupWithImageButton.addEventListener('click', closePopupWithImage);
popupProfile.addEventListener('click', handleOverlayClick);
popupNewPlace.addEventListener('click', handleOverlayClick);
popupWithImage.addEventListener('click', handleOverlayClick);