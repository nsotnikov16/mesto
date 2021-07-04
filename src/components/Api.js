export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.baseUrl;
    }

    _rejectPromise(res) {
        return Promise.reject(`Ошибка: ${res.status}, проверьте URL`)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
        headers: this._headers
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }

            return this._rejectPromise(res);
            })  
    }

    getUserData () {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
            })
                .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return this._rejectPromise(res);
                }) 
    }

    editProfile(inputsValue) {
        return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: inputsValue.name,
            about: inputsValue.info
        })
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }

            return this._rejectPromise(res);
            }); 
    }

    editAvatar(inputsValue) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: inputsValue.link,
            })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return this._rejectPromise(res);
                })  
    }

    addNewCardServer(inputsValue) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: inputsValue.name,
                link: inputsValue.link
            })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return this._rejectPromise(res);
                })  
    }

    putLikeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers})
            .then(res => {
                if (res.ok) {
                    return res.json()
                    .then(result => result.likes.length);
                }

                return this._rejectPromise(res);
                }) 
    }

    deleteLikeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers})
            .then(res => {
                if (res.ok) {
                    return res.json()
                    .then(result => result.likes.length);
                }

                return this._rejectPromise(res);
                })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers})
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return this._rejectPromise(res);
                })  
    }
    
}