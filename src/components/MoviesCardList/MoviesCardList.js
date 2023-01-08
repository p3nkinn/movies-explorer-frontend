import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";

const MoviesCardList = ({
  movies,
  saveMovies,
  addNewMovies,
  onMoviesDelete,
  messageError,
}) => {
  const [visible, setVisible] = React.useState(0);
  const movieList = movies.slice(0, visible);
  const [hideButton, setHideButton] = React.useState(false);
 
  const widthMovieList = () => {
    if (window.innerWidth > 1024 && window.innerWidth < 1400) {
       setVisible(12);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
       setVisible(8);
    } else if (window.innerWidth < 768) {
       setVisible(5);
    }
  };

  React.useEffect(() => {
    widthMovieList();
  }, []);

  const loadMore = () => {
    if (window.innerWidth > 1024 && window.innerWidth < 1400) {
      setVisible(visible + 3);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setVisible(visible + 2);
    } else if (window.innerWidth < 768) {
      setVisible(visible + 1);
    }
  };

  React.useEffect(() => {
    if (movieList.length === movies.length) {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, [movieList.length, movies.length]);

  return (
    <section className="moviescard">
      {messageError === "" || <p className="movies__error">{messageError}</p>}
      <ul className="moviescard__list">
        {movieList.map((movie) => (
          <MoviesCard
            movies={movie}
            key={movie.id}
            saveMovies={saveMovies}
            addNewMovies={addNewMovies}
            onMoviesDelete={onMoviesDelete}
          />
        ))}
      </ul>
      <Switch>
        <Route path="/movies">
          <button
            className={`${
              !hideButton && movies.length > 3
                ? "moviescard__button-more"
                : "moviescard__button-hide"
            }`}
            type="button"
            aria-label="Добавить фильмы"
            onClick={loadMore}
          >
            Ещё
          </button>
        </Route>
      </Switch>
    </section>
  );
};

export default MoviesCardList;
