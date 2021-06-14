import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import { idTemplate, config } from "./constants.js";



export function createCard(item) {
    const card = new Card (item, idTemplate, () => {
        const popupWithImage = new PopupWithImage ({selectorPopup:'.popup-img'});
            popupWithImage.open(item)
            popupWithImage.setEventListeners()
    })
    const cardElement = card.generateCard();
    return cardElement
}

export function validationForm (popup) {
    const validator = new FormValidator (config, popup.form);
    validator.enableValidation();
    popup.inputList.forEach(input => {
        validator.hideInputError(input)
    })
    return validator
}
