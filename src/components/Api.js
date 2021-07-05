export default class Api {
    constructor(options) {
      this._headers = options.headers;
      this._url = options.baseUrl;
    }
  
    _handleResponse(res) {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Ошибка: ${res.status}, проверьте URL`);
    }
  
    _handleResponseLike(res) {
      if (res.ok) {
        return res.json().then((result) => result.likes.length);
      }
  
      return Promise.reject(`Ошибка: ${res.status}, проверьте URL`);
    }
  
    getInitialCards() {
      return fetch(`${this._url}/cardss`, {
        headers: this._headers,
      }).then(this._handleResponse);
    }
  
    getUserData() {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers,
      }).then(this._handleResponse);
    }
  
    editProfile(inputsValue) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: inputsValue.name,
          about: inputsValue.info,
        }),
      }).then(this._handleResponse);
    }
  
    editAvatar(inputsValue) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: inputsValue.link,
        }),
      }).then(this._handleResponse);
    }
  
    addNewCardServer(inputsValue) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: inputsValue.name,
          link: inputsValue.link,
        }),
      }).then(this._handleResponse);
    }
  
    putLikeCard(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._handleResponseLike);
    }
  
    deleteLikeCard(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._handleResponseLike);
    }
  
    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._handleResponse);
    }
  }
  