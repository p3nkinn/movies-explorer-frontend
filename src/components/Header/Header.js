import React from "react";
import { Route, Link } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header header__type-black">
          <div className="main-content">
            <nav className="header__navigation">
          <Link className="header__logo" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link> 
          <Navigation />
          </nav>
          </div>
        </header>
      </Route>
      <Route exact path="/">
        <header className="header">
          <div className="main-content">
            <nav className="header__location">
          <Link className="header__logo" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link>
          <Navigation />
          </nav>
          </div>
        </header>
      </Route>
      
    </>
  );
}

export default Header;
