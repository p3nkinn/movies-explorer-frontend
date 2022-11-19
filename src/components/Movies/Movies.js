import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";



const Movies = ({ movies }) => {

    const [cards, setCards] = React.useState([movies])
    const [filterIsOn, setFilterIsOn] = React.useState(false);

    const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < 40);
  
    const onFilterChange = () => {
      setFilterIsOn(!filterIsOn);
    };
    React.useEffect(() => {
        setCards(movies);
    }, [movies])

    
    React.useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(cards))
    }, [cards])

    return (
        <section className="movies">
        <SearchForm onFilterChange={onFilterChange} />
        <MoviesCardList movies={filterIsOn ? filterShortFilm(movies) : movies } />
        </section>
    )
}

export default Movies;