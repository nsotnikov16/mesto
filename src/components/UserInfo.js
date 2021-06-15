export default class UserInfo {
    constructor ( { userName, userInfo } ) {
        this._name = document.querySelector(userName);
        this._info = document.querySelector(userInfo);
    }

    getUserInfo() {
        this._userInfo = { name: this._name, info: this._info }
        return this._userInfo;
    }

    setUserInfo(inputsValue) {
        this._name.textContent = inputsValue.name;
        this._info.textContent = inputsValue.info;
    }
}