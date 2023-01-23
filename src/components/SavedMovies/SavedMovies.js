/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const SavedMovies = ({
  movies,
  onMoviesDelete,
  handleSaveMovies,
  loggedIn,
}) => {
  const [filterIsOn, setFilterIsOn] = React.useState(false);

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION);
  const handleFilterChange = () => {
    setFilterIsOn(!filterIsOn);
  };

  // eslint-disable-next-line no-unused-vars
  const [moviesToRender, setMoviesToRender] = React.useState([]);

  React.useEffect(() => {
      setMoviesToRender(movies)
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
        filterIsOn={filterIsOn}
      />
      <MoviesCardList
        movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
        onMoviesDelete={onMoviesDelete}
      />
      <div className="saved-movie-devider" />
    </section>
  );
};

export default SavedMovies;
