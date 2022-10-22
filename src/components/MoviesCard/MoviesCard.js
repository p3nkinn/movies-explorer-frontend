import React from "react";
import "../MoviesCard/MoviesCard.css";

function MoviesCard({ card }) {
  const duration = `${'27 минут'}`;

  return (
    <li className="elements__item">
      <div className="elements__description">
        <h3 className="elements__title">В погоне за Бенкси</h3>
        <p className="elements__duration">{duration}</p>
      </div>
      <img src={card} alt="text" className="elements__image" />
          <button
            type="button"
            className="elements__saved"
            aria-label="сохранить"
          >Сохранить</button>
    </li>
  );
}

export default MoviesCard;
