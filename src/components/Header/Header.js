import React from "react";
import { Route, Link } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header header__type-white">
          <Link className="header__link" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link>
          <div className="header__item">
            <Navigation />
          </div>
        </header>
      </Route>
      <Route exact path="/">
        <header className="header">
          <Link className="header__link" href="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link>
          <nav className="header__user">
            <Navigation />
          </nav>
        </header>
      </Route>
    </>
  );
}

export default Header;
