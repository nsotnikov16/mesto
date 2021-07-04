//КОНСТАНТЫ:
export const editButton = document.querySelector('.profile__edit-btn');
export const addButton = document.querySelector('.profile__add-btn');
export const profileInputName = document.querySelector('#name-profile-input');
export const profileInputInfo = document.querySelector('#info-profile-input');

export const avatarChange = document.querySelector('.profile__change');
export const avatar = avatarChange.querySelector('.profile__avatar');
export const editAvatar = avatarChange.querySelector('.profile__edit-avatar');
export const usernameProfile = document.querySelector('.profile__username');
export const userinfoProfile = document.querySelector('.profile__info');

export const elements = '.elements';
export const codeEscape = 27;
export const idTemplate = '#newplace';

//КОНФИГИ
//-----------------------------
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
  }; 

export const selectors = {
  popupProfileSelector:'.popup-profile',
  profileUserName: '.profile__username',
  profileInfo: '.profile__info',
  profileAvatar: '.profile__avatar',
  popupNewPlaceSelector: '.popup-newplace',
  elements:'.elements',
  popupWithImageSelector: '.popup-img',
  popupConfirm: '.popup-confirm',
  popupUpdate: '.popup-update',
  popupError: '.popup-error'
}

export const apiRequest = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
      authorization: 'ae96c89c-0c63-4b1c-b822-1b0fac9d9184',
      'Content-Type': 'application/json',
    }
}