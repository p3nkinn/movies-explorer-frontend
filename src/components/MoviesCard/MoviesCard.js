import React from "react";
import "../MoviesCard/MoviesCard.css";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ saveMovies, movies, addNewMovies, onMoviesDelete }) => {
  const location = useLocation();
  const editedDuration = `${Math.trunc(movies.duration / 60)}ч ${
    movies.duration % 60
  }м`;

  const handleMovies = (e) => {
    e.preventDefault();
    if (movies.id) {
      saveMovies.some((i) => i.movieId === movies.id) ? onMoviesDelete(saveMovies.find((i) => i.movieId === movies.id)) :addNewMovies(movies);
    } else {
        onMoviesDelete(movies);   
    }
  };

  const isFavorite = saveMovies.some((i) => i.movieId === movies.id);
  const isOwn = saveMovies.find((i) => i.movieId === movies.id);
  const movieDeleteButtonClassName = `moviescard__saved ${
    isOwn ? "moviescard__saved moviescard__saved_delete" : ""
  }`;

  const movieFavoriteButtonClassName = `moviescard__saved ${
    isFavorite ? "moviescard__saved_active" : ""
  }`;

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
          onClick={handleMovies}
          className={movieFavoriteButtonClassName}
          aria-label="сохранить"
        >
          Сохранить
        </button>
      ) : (
        <button
          type="button"
          onClick={handleMovies}
          className={movieDeleteButtonClassName}
          aria-label="сохранить"
        ></button>
      )}
    </li>
  );
};

export default MoviesCard;
