import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const SavedMovies = ({
  saveMovies,
  movies,
  onMoviesDelete,
  addNewMovies,
}) => {
  const [filterIsOn, setFilterIsOn] = React.useState(false);

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);
  const handleFilterChange = () => {
    setFilterIsOn(!filterIsOn);
  };

  const [moviesToRender, setMoviesToRender] = React.useState([]);

  React.useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const searchFilter = (data, search) => {
    if (search) {
      const filterRegex = new RegExp(search, "gi");
      return data.filter(
        (item) => filterRegex.test(item.nameRU) || filterRegex.test(item.nameEN)
      );
    }
    return [];
  };

  const searchInSavedHandler = (search) => {
    setMoviesToRender(searchFilter(movies, search));
  };

  return (
    <section className="saved-movie">
      <SearchForm
        handleFilterChange={handleFilterChange}
        onSearch={searchInSavedHandler}
      />
      <MoviesCardList
        saveMovies={saveMovies}
        movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
        onMoviesDelete={onMoviesDelete}
        addNewMovies={addNewMovies}
      />
      <div className="saved-movie-devider" />
    </section>
  );
};

export default SavedMovies;
