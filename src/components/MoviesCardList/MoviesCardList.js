import { React, useState, useEffect} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";

const MoviesCardList = ({ movies }) => {
  const [visible, setVisible] = useState(0);

  const widthMovieList = () => {
    if (window.innerWidth < 1280) {
      setVisible(12);
    } if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setVisible(8);
    } if (window.innerWidth < 768) {
      setVisible(5)
    }
  }

  useEffect(() => {
    widthMovieList()
  }, [])

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3);
    if (window.innerWidth < 1280) {
      setVisible(visible + 3);
    } if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setVisible(visible + 2);
    } if (window.innerWidth < 768) {
      setVisible(visible + 1);
    }
  };

  return (
    <section className="moviescard">
      <ul className="moviescard__list">
        {movies.slice(0, visible).map((item) => (
          <MoviesCard card={item} key={item.id} />
        ))}
      </ul>
      <Switch>
        <Route path="/movies">
          <button
            className="moviescard__button-more"
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
