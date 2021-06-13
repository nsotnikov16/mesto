//КОНСТАНТЫ:

//ДЛЯ ПОПАПА ПРОФИЛЯ
//------------------------------------
export const editButton = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup-profile');
const closePopupProfileButton = document.querySelector('.close-profile');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');
export const popupUserName = document.querySelector('.popup__input_field_username');
export const popupInfo = document.querySelector('.popup__input_field_info');
const saveProfileButton = document.querySelector('.save-profile');
const formProfile = document.querySelector('.form-profile');

// -----------------------------------

//ДЛЯ ПОПАПА СОЗДАНИЯ КАРТОЧКИ
//------------------------------------
export const addButton = document.querySelector('.profile__add-btn');
const popupNewPlace = document.querySelector('.popup-newplace');
const closePopupNewPlaceButton = document.querySelector('.close-newplace');
export const popupNamePlace = document.querySelector('.popup__input_field_nameplace');
export const popupLinkPlace = document.querySelector('.popup__input_field_link');
const saveNewPlaceButton = document.querySelector('.save-newplace');
const formNewPlace = document.querySelector('.form-newplace');
export const elements = document.querySelector('.elements');
//------------------------------------

//ДЛЯ ПОПАПА С ИЗОБРАЖЕНИЕМ
//---------------------------------------
const popupWithImage = document.querySelector('.popup-img');
const popupWithImageTitle = document.querySelector('.popup-img__title');
const popupWithImagePhoto = document.querySelector('.popup-img__image');
const closePopupWithImageButton = document.querySelector('.popup-img__close');
//-----------------------------------
export const codeEscape = 27;
export const idTemplate = '#newplace';

//ОБЪЕКТЫ
//-----------------------------
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
  }; 