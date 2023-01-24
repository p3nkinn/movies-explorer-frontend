import React from "react";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__item">
        <li className="portfolio__list">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://p3nkinn.github.io/how-to-learn/index.html"
          >
            Статичный сайт
          </a>
        </li>

        <li className="portfolio__list">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://p3nkinn.github.io/russian-travel/index.html"
          >
            Адаптивный сайт
          </a>
        </li>

        <li className="portfolio__list">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://p3nkinn.students.nomoredomains.sbs"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
