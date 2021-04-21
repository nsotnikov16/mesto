const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');
let popupUserName = document.querySelector('.popup__username');
let popupInfo = document.querySelector('.popup__info');
let saveButton = document.querySelector('.popup__save');
let form = document.querySelector('.popup__form');

function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
    textPopupProfile();
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}

function textPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileInfo.textContent = popupInfo.value;
    popup.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);


