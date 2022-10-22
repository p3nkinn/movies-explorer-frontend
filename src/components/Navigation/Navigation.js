import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <Switch>
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
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <nav className="header__user">
          <Link className="header__films" to="movies">
            Фильмы
          </Link>
          <Link className="header__films" to="saved-movies">
            Сохранённые фильмы
          </Link>
          <Link to="profile">
            <button type="button" className="header__profile_btn">
              Аккаунт
            </button>
          </Link>
        </nav>
      </Route>
    </Switch>
  );
}

export default Navigation;
