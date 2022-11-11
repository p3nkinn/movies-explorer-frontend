import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const cards = [];

const Movies = () => {
    return (
        <section className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} />
        </section>
    )
}

export default Movies;