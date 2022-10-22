import React from "react";
import { Route, Link } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
      <div className="main-content">
        <header className="header header__type-black">
          <Link className="header__link" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link> 
          <Navigation />
        </header>
        </div>
      </Route>
      <Route exact path="/">
        <header className="header">
          <div className="main-content">
          <Link className="header__link" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link>
          <Navigation />
          </div>
        </header>
      </Route>
      
    </>
  );
}

export default Header;
