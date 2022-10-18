import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
      <Switch>
        <Route path="/">
          <Link className="header__auth-register" to="/sign-up">
            Регистрация
          </Link>
          <Link to="/sign-in">
            <button type="button" className="header__auth-login">
              Войти
            </button>
          </Link>
        </Route>
        <Route path="/movies">
          <Link className="header__films" to="/movies">
            Фильмы
          </Link>
          <Link className="header__films" to="/saved-movies">
            Сохранённые фильмы
          </Link>
          <Link className="header__profile_btn" to="/profile">
            Аккаунт
          </Link>
        </Route>
      </Switch>
  );
}

export default Navigation;
