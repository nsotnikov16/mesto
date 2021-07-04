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
