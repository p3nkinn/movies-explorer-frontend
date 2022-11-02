import React from "react";
import "../MoviesCard/MoviesCard.css";


const MoviesCard = ({ card }) => {
  const [activeState, setActiveState] = React.useState(false);
  const duration = `${'27 минут'}`;
  function handleClickButton() {
    setActiveState(activeState => !activeState);
  }

  return (
    <li className="moviescard__item">
      <div className="moviescard__description">
        <h3 className="moviescard__title">В погоне за Бенкси</h3>
        <p className="moviescard__duration">{duration}</p>
      </div>
      <img src={card} alt="text" className="moviescard__image" />
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
