import React from "react";
import "../MoviesCard/MoviesCard.css";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ movies, isSavedMovie, handleAction, onMoviesDelete}) => {
  const location = useLocation();
  const editedDuration = `${Math.trunc(movies.duration / 60)}ч ${
    movies.duration % 60
  }м`;


  return (
    <li className="moviescard__item">
      <div className="moviescard__description">
        <h3 className="moviescard__title">{movies.nameRU}</h3>
        <p className="moviescard__duration">{editedDuration}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={movies.trailerLink}>
        <img
          src={movies.image}
          alt={movies.nameRU}
          className="moviescard__image"
        />
      </a>
      {location.pathname === "/movies" ? (
        <button
          type="button"
          onClick={() => handleAction(movies)}
          className={`${isSavedMovie(movies) ? "moviescard__saved moviescard__saved_active" : "moviescard__saved"}`}
          aria-label="сохранить"
        >
          Сохранить
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onMoviesDelete(movies)}
          className={"moviescard__saved moviescard__saved_delete"}
          aria-label="сохранить"
        ></button>
      )}
    </li>
  );
};

export default MoviesCard;
