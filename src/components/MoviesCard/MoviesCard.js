import React from "react";
import "../MoviesCard/MoviesCard.css";

function MoviesCard({ card }) {
  return (
    <li className="elements__item">
      <img src={card} alt="text" className="elements__image" />
      <div className="elements__description">
        <h3 className="elements__title">33 слова о дизайне</h3>
        <div className="elements__hearts">
          <button
            type="button"
            className="elements__likes"
            aria-label="лайк"
          ></button>
        </div>
      </div>
      <p className="elements__duration">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
