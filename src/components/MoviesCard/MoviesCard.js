import React from "react";
import "../MoviesCard/MoviesCard.css";


const MoviesCard = ({ card }) => {
  const [activeState, setActiveState] = React.useState(false);

  function handleClickButton() {
    setActiveState(activeState => !activeState);
  }

  return (
    <li className="moviescard__item">
      <div className="moviescard__description">
        <h3 className="moviescard__title">{card.nameRU}</h3>
        <p className="moviescard__duration">{card.duration}</p>
      </div>
      <img src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className="moviescard__image" />
          <button
            onClick={handleClickButton}
            type="button"
            className={`moviescard__saved${activeState ? ' moviescard__saved_active' : ''}`}
            aria-label="сохранить"
          >Сохранить</button>
    </li>
  );
}

export default MoviesCard;
