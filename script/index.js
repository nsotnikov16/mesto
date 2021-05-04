//POPUP PROFILE
const editButton = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup-profile');
const closePopupProfileButton = document.querySelector('.close-profile');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');
const popupUserName = document.querySelector('.popup__input_field_username');
const popupInfo = document.querySelector('.popup__input_field_info');
const saveProfileButton = document.querySelector('.save-profile');
const formProfile = document.querySelector('.form-profile');

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

formProfile.addEventListener('submit', formSubmitHandlerProfile);
editButton.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', closePopupProfile);
popupProfile.addEventListener('click', handleOverlayClickProfile);

//POPUP NEWPLACE

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

initialCards.forEach(function (item) {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    newPlaceElement.querySelector('.elements__photo').src = item.link;
    newPlaceElement.querySelector('.elements__photo').alt = item.name;
    newPlaceElement.querySelector('.elements__title').textContent = item.name;
    const trashButton = newPlaceElement.querySelector('.elements__trash-btn');
    const like = newPlaceElement.querySelector('.elements__like');
    elements.append(newPlaceElement);

    function handleRemoveCard(evt) {
        evt.target.closest('.elements__place').remove();
    };
    trashButton.addEventListener('click', handleRemoveCard);

    like.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    return newPlaceElement;
})

function addNewPlaceClickButton() {
    const newPlaceElement = newPlaceTemplate.querySelector('.elements__place').cloneNode(true);
    newPlaceElement.querySelector('.elements__photo').src = `${popupLinkPlace.value}`;
    newPlaceElement.querySelector('.elements__photo').alt = `${popupNamePlace.value}`;
    newPlaceElement.querySelector('.elements__title').textContent = `${popupNamePlace.value}`;
    newPlaceElement.querySelector('.elements__trash-btn');
    elements.prepend(newPlaceElement);
}

function formSubmitHandlerNewPlace (evt) {
    evt.preventDefault();
    addNewPlaceClickButton();
    closePopupNewPlace();
    popupNamePlace.value = "";
    popupLinkPlace.value = "";

    const trashButtonAfter = document.querySelector('.elements__trash-btn');
    trashButtonAfter.addEventListener('click', function (evt) {
        evt.target.closest('.elements__place').remove();
    })

    const likeAfter = document.querySelector('.elements__like');
    likeAfter.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });
}

formNewPlace.addEventListener('submit', formSubmitHandlerNewPlace);
addButton.addEventListener('click', openPopupNewPlace);
closePopupNewPlaceButton.addEventListener('click', closePopupNewPlace);
popupNewPlace.addEventListener('click', handleOverlayClickNewPlace);