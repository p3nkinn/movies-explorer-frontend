import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

const SavedMovies = ({movies}) => {
    return (
        <section className="saved-movie">
            <SearchForm />
            <MoviesCardList movies={movies} />
            <div className="saved-movie-devider" />
        </section>
    )
}

export default SavedMovies;

