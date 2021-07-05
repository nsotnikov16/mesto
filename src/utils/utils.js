import { editAvatar, avatar } from './constants.js';
export function hideInputErrorForm (popup, validator) {
    popup._inputList.forEach(input => {
        validator.hideInputError(input)
    })
}

export function hoverEditAvatar() {
    editAvatar.classList.toggle('profile__edit-avatar_visible');
    avatar.classList.toggle('profile__avatar_opacity');
}

export function handleRejected(err, popup) {
    popup.editTextButton(popup.textButtonDefault);  
    alert(err);
  } // Не знаю как лучше будет именно для проектной работы, но считаю что в реальной ситуации, лучше всё таки при ошибке с сервера не закрывать и не сбрасывать форму