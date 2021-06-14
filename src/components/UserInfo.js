
export default class UserInfo {
    constructor ( { userName, userInfo } ) {
        this.name = document.querySelector(userName);
        this.info = document.querySelector(userInfo);
    }

    getUserInfo() {
        this._userInfo = { name: this.name, info: this.info }
        return this._userInfo;
    }

    setUserInfo(inputsValue) {
        let {name: username, info: userinfo} = this.getUserInfo();
        username.textContent = inputsValue.name;
        userinfo.textContent = inputsValue.info;
    }
}