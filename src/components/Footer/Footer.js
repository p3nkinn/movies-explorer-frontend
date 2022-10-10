import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-content">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__wrapper">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list">
            <li>
              <a target="_blank" rel="noreferrer" className="footer__link" href="https://practicum.yandex.ru/">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="footer__link" href="https://github.com/">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
