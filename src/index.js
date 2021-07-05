import "./pages/index.css";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import FormValidator from "./components/FormValidator.js";
import Api from "./components/Api.js";
import {
  hideInputErrorForm,
  hoverEditAvatar,
} from "./utils/utils.js";
import {
  addButton,
  editButton,
  profileInputName,
  profileInputInfo,
  idTemplate,
  selectors,
  config,
  avatarChange,
  editAvatar,
  apiRequest,
  avatar,
} from "./utils/constants.js";

let userInfoServer = null;

function createCard(item) {
  const card = new Card(
    item,
    idTemplate,
    userInfoServer,
    () => api.putLikeCard(card.id),
    () => api.deleteLikeCard(card.id),
    () => popupWithImage.open(item),
    (id, element) => {
      popupConfirm.other = { id, element };
      popupConfirm.open();
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function handleRejected(err, popup) {
  popup.editTextButton(popup.textButtonDefault);  
  alert(err);
} // Не знаю как лучше будет именно для проектной работы, но считаю что в реальной ситуации, лучше всё таки при ошибке с сервера не закрывать и не сбрасывать форму

const cardsPage = new Section(
  {
    renderer: (item) => cardsPage.addItemAppend(createCard(item)),
  },
  selectors.elements
);

const api = new Api(apiRequest);

const popupNewCard = new PopupWithForm(
  { selectorPopup: selectors.popupNewPlaceSelector },
  "Создать",
  "Создание...",
  (inputsValue) => {
    api
      .addNewCardServer(inputsValue)
      .then((result) => {
        cardsPage.addItemPrepend(createCard(result));
        popupNewCard.close();
      })
      .catch((err) => handleRejected(err, popupNewCard));
  }
);

const popupProfile = new PopupWithForm(
  { selectorPopup: selectors.popupProfileSelector },
  "Сохранить",
  "Сохранение...",
  (inputsValue) => {
    api
      .editProfile(inputsValue)
      .then((result) => {
        profile.setUserInfo(result);
        popupProfile.close();
      })
      .catch((err) => handleRejected(err, popupProfile));
  }
);

const popupWithImage = new PopupWithImage({
  selectorPopup: selectors.popupWithImageSelector,
});

const profile = new UserInfo({
  userName: selectors.profileUserName,
  userInfo: selectors.profileInfo,
  userAvatar: selectors.profileAvatar,
});

const {
  name: username,
  info: userinfo,
  avatar: useravatar,
} = profile.getUserInfo();

const popupUpdate = new PopupWithForm(
  { selectorPopup: selectors.popupUpdate },
  "Сохранить",
  "Сохранение...",
  (inputsValue) => {
    api
      .editAvatar(inputsValue)
      .then((result) => {
        avatar.src = result.avatar;
        popupUpdate.close();
      })
      .catch((err) => handleRejected(err, popupUpdate));
  }
);

const popupConfirm = new PopupWithForm(
  { selectorPopup: selectors.popupConfirm },
  "Да",
  "Удаление...",
  () => {
    api
      .deleteCard(popupConfirm.other.id)
      .then(() => {
        popupConfirm.other.element.remove();
        popupConfirm.close();
      })
      .catch((err) => handleRejected(err, popupConfirm));
  }
);

const validatorNewPlace = new FormValidator(config, popupNewCard.form);
validatorNewPlace.enableValidation();

const validatorProfile = new FormValidator(config, popupProfile.form);
validatorProfile.enableValidation();

const validatorUpdate = new FormValidator(config, popupUpdate.form);
validatorUpdate.enableValidation();

addButton.addEventListener("click", () => {
  hideInputErrorForm(popupNewCard, validatorNewPlace);
  validatorNewPlace.toggleButtonState();
  popupNewCard.open();
});

editButton.addEventListener("click", () => {
  profileInputName.value = username.textContent;
  profileInputInfo.value = userinfo.textContent;

  hideInputErrorForm(popupProfile, validatorProfile);
  popupProfile.open();
});

avatarChange.addEventListener("mouseover", hoverEditAvatar);
avatarChange.addEventListener("mouseout", hoverEditAvatar);

editAvatar.addEventListener("click", () => {
  hideInputErrorForm(popupUpdate, validatorUpdate);
  validatorUpdate.toggleButtonState();
  popupUpdate.open();
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userdata, cards]) => {
    username.textContent = userdata.name;
    userinfo.textContent = userdata.about;
    useravatar.src = userdata.avatar;
    userInfoServer = userdata;
    cardsPage.renderItemsServer(cards);
  })
  .catch((err) => alert(err));
