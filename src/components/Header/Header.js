import React from "react";
import { Route } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
          <img src={moviesLogo} className="header__logo" alt="логотип" />
        </a>
      <Route exact path="/">
        <div className="header__user">
          <a className="header__auth-register" href="sign-in">
            Регистрация
          </a>
          <button type="button" className="header__auth-login" href="sign-up">
            Войти
          </button>
        </div>
      </Route>
      <Route path="/movies">
      <div className="header__item">
          <a className="header__films" href="sign-in">
          Фильмы
          </a>
          <a className="header__films" href="sign-up">
          Сохранённые фильмы
          </a>
          <button type="button" className="header__profile_btn" href="sign-up">
          Аккаунт
          </button>
        </div>
      </Route>
    </header>
  );
}

export default Header;
