export default class UserInfo {
    constructor ( { userName, userInfo, userAvatar } ) {
        this._name = document.querySelector(userName);
        this._info = document.querySelector(userInfo);
        this._avatar = document.querySelector(userAvatar)
    }

    getUserInfo() {
        this._userInfo = { name: this._name, info: this._info, avatar: this._avatar }
        return this._userInfo;
    }

    setUserInfo(inputsValue) {
        this._name.textContent = inputsValue.name;
        this._info.textContent = inputsValue.about;
    }
}