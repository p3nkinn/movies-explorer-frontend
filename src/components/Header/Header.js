import React from "react";
import moviesLogo from "../../images/head_logo.svg";
import "./Header.css";
function Header() {
  return (
    <header className="header"> 
      <a className="header__link" href="about">
        <img src={moviesLogo} className="header__logo" alt="логотип" />
      </a>
      <div className="header__user">
        <a className="header__auth-register" href="sign-in">
          Регистрация
        </a>
        <button type="button" className="header__auth-login" href="sign-up">
        Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
