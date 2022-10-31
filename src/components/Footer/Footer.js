import React from "react";
import { Route, Switch } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <Switch>
      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <footer className="footer">
          <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
          <div className="footer__wrapper">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()}
            </p>
            <ul className="footer__list">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                  href="https://practicum.yandex.ru/"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                  href="https://github.com/"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}

export default Footer;
