//ИМПОРТЫ
import { Card } from "./Card.js";
import { FormValidator } from './FormValidator.js';

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
const idTemplate = '#newplace';

//ОБЪЕКТЫ
//-----------------------------
  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
  }; 

  const profileFormValidator = new FormValidator (config, formProfile);

  profileFormValidator.enableValidation();

  const newPlaceFormValidator = new FormValidator (config, formNewPlace);

  newPlaceFormValidator.enableValidation();
  
//ФУНКЦИИ 
//------------------------------------------

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc (evt) {
    if (evt.keyCode === codeEscape) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup (popupOpened);
    }
} 

function openPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
    openPopup(popupProfile);
    profileFormValidator.hideInputError(popupUserName);
    profileFormValidator.hideInputError(popupInfo);
}

function openPopupNewPlace () {
    openPopup(popupNewPlace);
    popupNamePlace.value = "";
    popupLinkPlace.value = "";
    newPlaceFormValidator.hideInputError(popupNamePlace);
    newPlaceFormValidator.hideInputError(popupLinkPlace);
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

function openPopupWithImage (evt) {
    openPopup(popupWithImage);
    popupWithImagePhoto.src = evt.target.src;
    popupWithImagePhoto.alt = evt.target.alt;
    popupWithImageTitle.textContent = evt.target.alt;
}

function createCard (link, name, template, openPopupWithImage) {
    const card = new Card (link, name, template, openPopupWithImage);
    return card.generateCard()
}

function handleSubmitNewPlace (evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupLinkPlace.value, popupNamePlace.value, idTemplate, openPopupWithImage));
    closePopup(popupNewPlace);
    popupNamePlace.value = "";
    popupLinkPlace.value = "";
    saveNewPlaceButton.disabled = true;
}
//----------------------------------------

//forEACH
//---------------------------------------
initialCards.forEach(function (item) {
    elements.append(createCard(item.link, item.name, idTemplate, openPopupWithImage));
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