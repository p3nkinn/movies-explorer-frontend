import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isBurberClass, setBurgerClass] = React.useState("burger__bar unclicked");
  const [isMenuClass, setMenuClass] = React.useState("burger burger_hidden");
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger__bar clicked");
      setMenuClass("burger burger_visible");
    } else {
      setBurgerClass("burger__bar unclicked");
      setMenuClass("burger burger_hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={isMenuClass}>
       <div className="burger__container">
        <nav className="burger__navigation">
          <div className="burger__wrapper">
        <Link
          className="header__films"
          to="/"
        >
          Главная
        </Link>
        <NavLink
          className="header__films"
          activeClassName="header__films_active"
          to="movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className="header__films"
          activeClassName="header__films_active"
          to="saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
        </div>
        <Link to="profile">
          <button type="button" className="header__profile_btn">
            Аккаунт
          </button>
        </Link>
        </nav>
      </div>
        <div className="burger__menu" onClick={updateMenu}>
          <span className={isBurberClass}></span>
          <span className={isBurberClass}></span>
          <span className={isBurberClass}></span>
        </div>
    </div>
  );
};

export default BurgerMenu;
