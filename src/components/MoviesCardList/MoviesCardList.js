import { React, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { Route, Switch } from "react-router-dom";
import { slice, concat } from "lodash";

function MoviesCardList({ cards }) {
  const LIMIT = 6;
  const data = [ ...cards ];
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(data, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < data - 1;
    const newList = concat(list, slice(data, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <section className="elements">
      <div className="main-content">
      <ul className="elements__list">
        {list.map((item, i) => (
          <MoviesCard card={item} key={i} />
        ))}
      </ul>
      <Switch>
        <Route path="/movies">
          {showMore && (
            <button
              className="elements__button-more"
              type="button"
              aria-label="Добавить фильмы"
              onClick={loadMore}
            >
              Ещё
            </button>
          )}
        </Route>
      </Switch>
      </div>
    </section>
  );
}

export default MoviesCardList;
