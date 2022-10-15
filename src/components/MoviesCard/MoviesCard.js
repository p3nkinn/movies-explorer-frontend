import React from "react";
import '../MoviesCard/MoviesCard.css';

function MoviesCard() {
    return (
        <li className="elements__item">
          <img
            // onClick={handleClick}
            alt="img"
            className="elements__image"
          />
          <div className="elements__description">
            <h3 className="elements__title">h</h3>
            <div className="elements__hearts">
              <button
                // onClick={handleLikeClick}
                type="button"
                className="cardlike"
                aria-label="лайк"
              ></button>
              <span className="elements__likes_count"></span>
            </div>
          </div>
          <button
            // onClick={handleCardDelete}
            type="button"
            className="carddel"
            aria-label="удалить"
          ></button>
        </li>
      );
}

export default MoviesCard;