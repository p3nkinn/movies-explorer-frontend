export default class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  setProfileInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        about: userData.email,
      }),
    }).then(this._handleResponse);
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      }),
    })
    .then(this._handleResponse)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

export const api = new MainApi({
  baseUrl: "https://api.diploma.backend.nomorepartiesxyz.ru",
});
