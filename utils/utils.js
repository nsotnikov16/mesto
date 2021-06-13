import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { idTemplate } from "./constants.js";


export function createCard(item) {
    const card = new Card (item, idTemplate, () => {
        const popupWithImage = new PopupWithImage ({selectorPopup:'.popup-img'});
            popupWithImage.open(item)
    })
    const cardElement = card.generateCard();
    return cardElement
}