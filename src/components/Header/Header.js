import React from "react";
import { Route, useLocation, Link } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import "./Header.css";

function Header() {

  const location = useLocation();
  const islocationBasic = location.pathname === "/";

  return (
    <header className={`header ${!islocationBasic ? "header__type-white" : ""}`}>
      <a className="header__link" href="/">
          <img src={moviesLogo} className="header__logo" alt="логотип" />
        </a>
      <Route exact path="/">
        <nav className="header__user">
          <Link className="header__auth-register" to="/sign-up">
            Регистрация
          </Link>
          <Link to="/sign-in">
           <button type="button" className="header__auth-login">Войти</button> 
          </Link>
        </nav>
      </Route>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
      <div className="header__item">
          <a className="header__films" href="movies">
          Фильмы
          </a>
          <a className="header__films" href="saved-movies">
          Сохранённые фильмы
          </a>
          <Link to="profile">
          <button type="button" className="header__profile_btn">
          Аккаунт
          </button>
          </Link>
        </div>
      </Route>
    </header>
  );
}

export default Header;
