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

//ДЛЯ МАССИВА
//-----------------------------
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
  ];

//ФУНКЦИИ 
//------------------------------------------
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
    openPopup(popupProfile);
}

function openPopupNewPlace () {
    openPopup(popupNewPlace);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
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
        openPopup(evt.target) || closePopup(evt.target);
    }
}

function handleSubmitProfile (evt) {
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup(popupProfile);
}

function createCard(link, name, position) {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    const trashButton = newPlaceElement.querySelector('.elements__trash-btn');
    const likeButton = newPlaceElement.querySelector('.elements__like');
    const photo = newPlaceElement.querySelector('.elements__photo');
    
    newPlaceElement.querySelector('.elements__photo').src = link;
    newPlaceElement.querySelector('.elements__photo').alt = name;
    newPlaceElement.querySelector('.elements__title').textContent = name;
    

    if (position === 1) {
        elements.append(newPlaceElement);
    } else {
        elements.prepend(newPlaceElement);
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
        popupWithImageTitle.textContent = evt.target.alt;
    }
    
    trashButton.addEventListener('click', handleRemoveCard);
    likeButton.addEventListener('click', handleLikeCard);
    photo.addEventListener('click', openPopupWithImage);
    popupWithImage.addEventListener('click', handleOverlayClick);
    closePopupWithImageButton.addEventListener('click', closePopupWithImage);

    return newPlaceElement;
}

function handleSubmitNewPlace (evt) {
    evt.preventDefault();
    createCard(popupLinkPlace.value, popupNamePlace.value);
    closePopup(popupNewPlace);
    popupNamePlace.value = "";
    popupLinkPlace.value = "";
}
//----------------------------------------

//forEACH
//---------------------------------------
initialCards.forEach(function (item) {
    createCard(item.link, item.name, 1);
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
popupProfile.addEventListener('click', handleOverlayClick);
popupNewPlace.addEventListener('click', handleOverlayClick);