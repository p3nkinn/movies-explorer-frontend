import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";

const MoviesCardList = ({ movies, onSaveMovies, saveMovies }) => {
  const [visible, setVisible] = React.useState(0);
  const [hideButton, setHideButton] = React.useState(false);
  const movieList = movies.slice(0, visible);

  const widthMovieList = () => {
    if (window.innerWidth < 1280) {
      setVisible(12);
    } if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setVisible(8);
    } if (window.innerWidth < 768) {
      setVisible(5)
    }
  }


  React.useEffect(() => {
    widthMovieList()
  }, [])

  const loadMore = () => {
    if (window.innerWidth < 1280) {
      setVisible(visible + 3);
    } if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setVisible(visible + 2);
    } if (window.innerWidth < 768) {
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

// const getSavedMovieCard = ((movie) => {
//   onSaveMovies.find(savedMovie => savedMovie.id === movie.id)
//   console.log(onSaveMovies)
// }) 
  
  return (
    <section className="moviescard">
      <ul className="moviescard__list">
        {movieList.map((item) => (
          <MoviesCard  card={item} key={item.id} />
        ))}
      </ul>
      <Switch>
        <Route path="/movies">
          <button
            className={`${!hideButton && movies.length > 3 ? "moviescard__button-hide" : "moviescard__button-more" }`}
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
}

export default MoviesCardList;
