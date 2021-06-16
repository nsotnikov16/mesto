import './pages/index.css';
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from "./components/PopupWithForm.js";
import FormValidator from './components/FormValidator';
import { hideInputErrorForm } from './utils/utils.js';
import { addButton, editButton, profileInputName, profileInputInfo, idTemplate, selectors, config} from './utils/constants.js';
import { initialCards } from './utils/initial-cards.js';


const popupWithImage = new PopupWithImage ({selectorPopup: selectors.popupWithImageSelector});

function createCard(item) {
    const card = new Card (item, idTemplate, () => {
            popupWithImage.open(item)
    })
    const cardElement = card.generateCard();
    return cardElement
}

export const cardsPage = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsPage.addItemAppend(createCard(item));
    }
}, selectors.elements)

cardsPage.renderItems();

const profile = new UserInfo ({userName: selectors.profileUserName, userInfo: selectors.profileInfo});
const popupNewCard = new PopupWithForm({selectorPopup: selectors.popupNewPlaceSelector}, item => cardsPage.addItemPrepend(createCard(item)));
const popupProfile = new PopupWithForm ({selectorPopup: selectors.popupProfileSelector}, inputsValue => profile.setUserInfo(inputsValue));
const validatorNewPlace = new FormValidator (config, popupNewCard.form);
validatorNewPlace.enableValidation();
const validatorProfile = new FormValidator (config, popupProfile.form);
validatorProfile.enableValidation();

addButton.addEventListener('click', () => {
    hideInputErrorForm(popupNewCard, validatorNewPlace)
    validatorNewPlace.toggleButtonState();
    popupNewCard.open();
})

editButton.addEventListener('click', () => {
    const {name: username, info: userinfo} = profile.getUserInfo();
    profileInputName.value = username.textContent;
    profileInputInfo.value = userinfo.textContent;
    hideInputErrorForm(popupProfile, validatorProfile);
    popupProfile.open();
})