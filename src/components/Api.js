export class Api {
  constructor(data) {
    this._url = data.baseUrl;
    this._headers = data.headers;
    this._checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка запроса: ${res.status}`);
      }
    };
  }

  //___PROFILE_________________________________________________________________________________

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  editUserInfo(data) {
    //console.log(data);
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description,
      }),
    }).then((res) => this._checkResponse(res));
  }

  //___AVATAR__________________________________________________________________________________

  editAvatar(data) {
    //console.log(data.avatar)
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  //___CARD____________________________________________________________________________________

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  postCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  delCard(cardId) {
    //console.log(cardId)
    //console.log()
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  //_________________________________________________________________________________________

  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardId) {
    //console.log(cardId)
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}
