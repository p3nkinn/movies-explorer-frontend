import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";


const MoviesCardList = ({
  movies,
  saveMovies,
  addNewMovies,
  onMoviesDelete,
}) => {
  const [visible, setVisible] = React.useState(0);
  const [addCards, setAddCards] = React.useState(3);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const movieList = movies.slice(0, visible);
  const movieRender = () => {
    const count = Math.min(movies.length, visible + addCards);
    const extraMovies = movies.slice(visible, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setVisible(count);
  };
  
  const widthMovieList = () => {
    if (window.innerWidth < 1280) {
      return { load: 12, add: 3 };
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      return { load: 8, add: 2 };
    }
    if (window.innerWidth < 768) {
      return { load: 5, add: 2 };
    }
  };

  React.useEffect(() => {
    setAddCards(widthMovieList(window.innerWidth).add)
    const count = Math.min(movies.length, widthMovieList().load);
    setMoviesToRender(movies.slice(0, count));
    setVisible(count);
  }, [movies]);

  const loadMore = () => movieRender();

  return (
    <section className="moviescard">
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
              visible && movies.length
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
