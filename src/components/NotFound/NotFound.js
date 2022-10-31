import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link className="notfound__back" to="/">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
