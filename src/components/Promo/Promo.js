import React from "react";
import PromoLogo from "../../images/landing-logo.png";
import "./Promo.css";

const Promo = () => {
  
  return (
    <section className="promo">
        <div className="promo__wrapper">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button type="button" aria-label="О проекте" className="promo__button">
          <a href="#students" className="promo__link">Узнать больше</a>
        </button>
        </div>
        <img src={PromoLogo} className="promo__image" alt="логотип промо" />       
    </section>
  );
}

export default Promo;
