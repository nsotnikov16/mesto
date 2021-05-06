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
const trashButton = document.querySelector('.elements__trash-btn');
//------------------------------------

//ДЛЯ ПОПАПА С ИЗОБРАЖЕНИЕМ
//---------------------------------------
const popupWithImage = document.querySelector('.popup-img');
const popupWithImageTitle = document.querySelector('.popup-img__title');
const popupWithImagePhoto = document.querySelector('.popup-img__image');
const closePopupWithImageButton = document.querySelector('.popup-img__close');
const photo = document.querySelector('.elemets__photo');
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
//-----------------------------
//ОБЩИЕ:


//----------------------------------------------------------------------------------------------------------

//ФУНКЦИИ:

//ПОПАП ПРОФИЛЯ
//--------------------------------------
function textPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
}

function openPopupProfile() {
    popupProfile.classList.add('popup_opened');
    textPopupProfile();
}

function closePopupProfile () {
    popupProfile.classList.remove('popup_opened');
}

function handleOverlayClickProfile(event) {
    if (event.target === event.currentTarget) {
        openPopupProfile() || closePopupProfile();
    } 
}

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileInfo.textContent = popupInfo.value;
    closePopupProfile();
}

//--------------------------------------------------

//forEACH
//------------------------------------------------
initialCards.forEach(function (item) {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    const trashButton = newPlaceElement.querySelector('.elements__trash-btn');
    const like = newPlaceElement.querySelector('.elements__like');

    newPlaceElement.querySelector('.elements__photo').src = item.link;
    newPlaceElement.querySelector('.elements__photo').alt = item.name;
    newPlaceElement.querySelector('.elements__title').textContent = item.name;
    elements.append(newPlaceElement);

    function handleRemoveCard(evt) {
        evt.target.closest('.elements__place').remove();
    };

    function openPopupWithImage (evt) {
        popupWithImage.classList.add('popup-img_opened');
        popupWithImagePhoto.src = item.link;
        popupWithImageTitle.textContent = item.name;
    }
    
    function closePopupWithImage () {
        popupWithImage.classList.remove('popup-img_opened');
    }
    
    function handleOverlayClickWithImage(event) {
        if (event.target === event.currentTarget) {
            openPopupWithImage() || closePopupWithImage();
        } 
    }

    newPlaceElement.querySelector('.elements__photo').addEventListener('click', openPopupWithImage);
    closePopupWithImageButton.addEventListener('click', closePopupWithImage);
    popupWithImage.addEventListener('click', handleOverlayClickWithImage);
    trashButton.addEventListener('click', handleRemoveCard);
    like.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active')});
    
    return;
});
//------------------------------------------------

//ПОПАП СОЗДАНИЯ КАРТОЧКИ
//--------------------------------------------------
function openPopupNewPlace() {
    popupNewPlace.classList.add('popup_opened');
}

function closePopupNewPlace () {
    popupNewPlace.classList.remove('popup_opened');
}

function handleOverlayClickNewPlace(event) {
    if (event.target === event.currentTarget) {
        openPopupNewPlace() || closePopupNewPlace();
    } 
}

function addNewPlaceClickButton() {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    newPlaceElement.querySelector('.elements__photo').src = `${popupLinkPlace.value}`;
    newPlaceElement.querySelector('.elements__photo').alt = `${popupNamePlace.value}`;
    newPlaceElement.querySelector('.elements__title').textContent = `${popupNamePlace.value}`;
    newPlaceElement.querySelector('.elements__trash-btn');
    elements.prepend(newPlaceElement);
    return newPlaceElement;
}

function formSubmitHandlerNewPlace (evt) {
    evt.preventDefault();
    addNewPlaceClickButton();
    closePopupNewPlace();
    popupNamePlace.value = "";
    popupLinkPlace.value = "";

    const trashButtonOutside = document.querySelector('.elements__trash-btn');
    const likeOutside = document.querySelector('.elements__like');

    function openPopupWithImageOutSide (evt) {
        const evtTarget = evt.target;
        popupWithImage.classList.add('popup-img_opened');
        popupWithImagePhoto.src = evtTarget.src;
        popupWithImageTitle.textContent = evtTarget.alt;
    }
    
    function closePopupWithImageOutside () {
        popupWithImage.classList.remove('popup-img_opened');
    }
    
    function handleOverlayClickWithImageOutside(event) {
        if (event.target === event.currentTarget) {
            openPopupWithImageOutSide(evt) || closePopupWithImageOutside();
        } 
    }

    document.querySelector('.elements__photo').addEventListener('click', openPopupWithImageOutSide);
    closePopupWithImageButton.addEventListener('click', closePopupWithImageOutside);
    popupWithImage.addEventListener('click', handleOverlayClickWithImageOutside);
    
    trashButtonOutside.addEventListener('click', function (evt) {
        evt.target.closest('.elements__place').remove();});
    
    likeOutside.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active')});
}
//------------------------------------------------

//ОБРАБОТЧИКИ СОБЫТИЙ
//--------------------------------------------------
formProfile.addEventListener('submit', formSubmitHandlerProfile);
editButton.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', closePopupProfile);
popupProfile.addEventListener('click', handleOverlayClickProfile);
//---------------------------------------------------
formNewPlace.addEventListener('submit', formSubmitHandlerNewPlace);
addButton.addEventListener('click', openPopupNewPlace);
closePopupNewPlaceButton.addEventListener('click', closePopupNewPlace);
popupNewPlace.addEventListener('click', handleOverlayClickNewPlace);