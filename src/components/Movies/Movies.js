import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

const Movies = ({
  saveMovies,
  messageError,
  movies,
  handleAction,
  handleSearchMovies,
  isSavedMovie,
  searchValue
}) => {
  
  const [filterIsOn, setFilterIsOn] = React.useState(false);

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION);
  const handleFilterChange = () => {
    setFilterIsOn(!filterIsOn);
      localStorage.setItem('checkbox', !filterIsOn);
  };

  React.useEffect(() => {
    if (localStorage.getItem('checkbox')) {
      setFilterIsOn(JSON.parse(localStorage.getItem('checkbox')));
    }  
  }, []);



  return (
    <section className="movies">
      <SearchForm
        onSearch={handleSearchMovies}
        handleFilterChange={handleFilterChange}
        filterIsOn={filterIsOn}
        searchValue={searchValue}
      />
      <MoviesCardList
        saveMovies={saveMovies}
        handleAction={handleAction}
        isSavedMovie={isSavedMovie}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        messageError={messageError}
      />
    </section>
  );
};

export default Movies;
