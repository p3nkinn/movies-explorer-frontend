import React from "react";
import PromoLogo from '../../images/landing-logo.png';
import './Promo.css';

function Promo () {
    return (
        <section className="promo">
            <div className="promo__wrapper">
            <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
            </h1>
            <img src={PromoLogo} className="promo__image" alt="логотип промо" />
            </div>
            
        </section>
    )
}

export default Promo;