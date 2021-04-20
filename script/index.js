const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__info');



function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}

editButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);
