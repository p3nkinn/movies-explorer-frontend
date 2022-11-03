export default class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
    }

    _handleResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
     })
      .then(this._handleResponse)
    }
}

export const Api = new MoviesApi({
    baseUrl: ' https://api.nomoreparties.co/beatfilm-movies'
  });