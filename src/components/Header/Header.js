import React from "react";
import { Route, Link } from "react-router-dom";
import moviesLogo from "../../images/head_logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = ({ loggedIn }) => {
  return (
    <>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header header__type-black">
        <Link className="header__logo" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link> 
        <BurgerMenu />
            <nav className="header__navigation">
          <Navigation loggedIn={loggedIn} />
          </nav>
        </header>
      </Route>
  
      <Route exact path="/">
        <header className="header">
            
          <Link className="header__logo" to="/">
            <img src={moviesLogo} className="header__logo" alt="логотип" />
          </Link>
          <nav className={loggedIn ? "header__navigation" : ""}>
          <Navigation loggedIn={loggedIn} />
          </nav>
        </header>
      </Route>
    </>
  );
}

export default Header;
