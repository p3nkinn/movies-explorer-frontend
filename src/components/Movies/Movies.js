import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({
  saveMovies,
  messageError,
  movies,
  addNewMovies,
  handleSearchMovies,
  onMoviesDelete,
}) => {
  const [filterIsOn, setFilterIsOn] = React.useState(false);
  
  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);
  const handleFilterChange = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <section className="movies">
      <SearchForm
        onSearch={handleSearchMovies}
        handleFilterChange={handleFilterChange}
      />
      <MoviesCardList
        saveMovies={saveMovies}
        addNewMovies={addNewMovies}
        onMoviesDelete={onMoviesDelete}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        messageError={messageError}
      />
    </section>
  );
};

export default Movies;
