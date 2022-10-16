import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "../MoviesCardList/MoviesCardList.css";

function MoviesCardList({ cards }) {
  <section className="elements">
    <ul className="elements__list">
      {cards.map((item, i) => (
        <MoviesCard
          cards={item}
          key={i}
        />
      ))}
    </ul>
  </section>;
}

export default MoviesCardList;
