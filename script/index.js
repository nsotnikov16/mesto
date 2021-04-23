/* const editButton = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');
let popupUserName = document.querySelector('.popup__input_field_username');
let popupInfo = document.querySelector('.popup__input_field_info');
let saveButton = document.querySelector('.popup__save');
let form = document.querySelector('.popup__form');

function textPopupProfile () {
    popupUserName.value = profileUserName.textContent;
    popupInfo.value = profileInfo.textContent;
}

function openPopup() {
    popup.classList.add('popup_opened');
    textPopupProfile();
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        openPopup() || closePopup();
    } 
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup();
}

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popup.addEventListener('click', handleOverlayClick);


 */