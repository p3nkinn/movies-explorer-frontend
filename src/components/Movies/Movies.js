import React from "react";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import card1 from '../../images/movies-image.jpg';
import card2 from '../../images/movies-image.jpg';
import card3 from '../../images/movies-image.jpg';
import card4 from '../../images/movies-image.jpg';
import card5 from '../../images/movies-image.jpg';
import card6 from '../../images/movies-image.jpg';
import card7 from '../../images/movies-image.jpg';
import card8 from '../../images/movies-image.jpg';
import card9 from '../../images/movies-image.jpg';
const cards = [];
cards.push(card1, card2, card3, card4,card5,card6,card7,card8,card9);
function Movies() {
    return (
        <>
        <SearchForm />
        <MoviesCardList cards={cards} />
        </>
    )
}

export default Movies;