import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const SavedMovies = ({
  saveMovies,
  movies,
  isLoading,
  loadingError,
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

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, "gi");
      return data.filter(
        (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
      );
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
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
