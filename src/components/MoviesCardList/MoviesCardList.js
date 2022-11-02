import { React, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";

const MoviesCardList = ({ cards }) => {
  const [visible, setVisible] = useState(12);
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section className="moviescard">
      <ul className="moviescard__list">
        {cards.slice(0, visible).map((item, i) => (
          <MoviesCard card={item} key={i} />
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
