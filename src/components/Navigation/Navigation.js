import React from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ loggedIn }) => {
  return (
    <Switch>
      {!loggedIn ? (
        <Route exact path="/">
          <nav className="header__auth">
            <Link className="header__auth-register" to="/signup">
              Регистрация
            </Link>
            <Link to="/signin">
              <button type="button" className="header__auth-login">
                Войти
              </button>
            </Link>
          </nav>
        </Route>
      ) :
        <Route path={["/", "/movies", "/saved-movies", "/profile"]}>
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
          <Link to="profile">
            <button type="button" className="header__profile_btn">
              Аккаунт
            </button>
          </Link>
        </Route>
      }
    </Switch>
  );
};

export default Navigation;
