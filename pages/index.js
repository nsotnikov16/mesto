import { createCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { addButton, editButton } from '../utils/constants.js';
import { initialCards } from '../utils/initial-cards.js';
import PopupWithForm from "../components/PopupWithForm.js";

export const cardsPage = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsPage.addItemAppend(createCard(item));
    }
}, '.elements')

cardsPage.renderItems();

const profile = new UserInfo ({userName: '.profile__username', userInfo: '.profile__info'});
const popupNewCard = new PopupWithForm({selectorPopup: ".popup-newplace"}, item => cardsPage.addItemPrepend(createCard(item)));
const popupProfile = new PopupWithForm ({selectorPopup: ".popup-profile"}, inputsValue => profile.setUserInfo(inputsValue));

addButton.addEventListener('click', () => popupNewCard.open())

editButton.addEventListener('click', () => {
    const {name: username, info: userinfo} = profile.getUserInfo();
    popupProfile.inputName.value = username.textContent;
    popupProfile.inputInfo.value = userinfo.textContent;
    popupProfile.open();
})