import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';
import card1 from '../../images/movies-image.jpg';
import card2 from '../../images/movies-image.jpg';
import card3 from '../../images/movies-image.jpg';
const cards = [];
cards.push(card1, card2, card3);
const SavedMovies = () => {
    return (
        <section className="saved-movie">
            <SearchForm />
            <MoviesCardList cards={cards} />
            <div className="saved-movie-devider" />
        </section>
    )
}

export default SavedMovies;

