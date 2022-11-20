import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ movies, onShortMoviesCheck, onSearchMovies }) => {
  const [isChecked, setIsShortMoviesChecked] = React.useState(false);
  const [cards, setCards] = React.useState([movies]);
  const [filterIsOn, setFilterIsOn] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState("");
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);
  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);

  const onFilterChange = () => {
    setFilterIsOn(!filterIsOn);
  };

  React.useEffect(() => {
    setCards(cards);
    setNotFoundMovies(notFoundMovies);
  }, [cards, notFoundMovies]);

  function handleSearch(searchWord) {
    setSearchWord(searchWord);
  }

  const handleSearchCheck = (movies, ef, searchWord) => {
    const filterRegex = new RegExp(searchWord, "gi");
    return movies.filter((movie) => {
      if (ef) {
        return movie.duration <= 40 && filterRegex.test(movie.nameRU);
      } else {
        return filterRegex.test(movie.nameRU);
      }
    });
  };

  function handleShortMoviesChecked(e) {
    const ef = e.target.checked;
    if (ef) {
      const allMovies = JSON.parse(localStorage.getItem("movies"));
      const searchSavedResult = handleSearchCheck(allMovies, ef, searchWord);
      setIsShortMoviesChecked(true);
      if (searchSavedResult.length === 0) {
        setNotFoundMovies(true);
        setCards([]);
      } else {
        setCards(searchSavedResult);
        setNotFoundMovies(false);
      }
    } else {
      const allMovies = JSON.parse(localStorage.getItem("movies"));
      const searchSavedResult = handleSearchCheck(allMovies, ef, searchWord);
      setIsShortMoviesChecked(false);
      if (searchSavedResult.length === 0) {
        setNotFoundMovies(true);
        setCards([]);
      } else {
        setCards(searchSavedResult);
        setNotFoundMovies(false);
      }
    }
  }

  return (
    <section className="movies">
      <SearchForm onSearch={handleSearch} isChecked={isChecked} onShortMoviesCheck={handleShortMoviesChecked} onSearchMovies={onSearchMovies} onFilterChange={onFilterChange} />
      <MoviesCardList movies={filterIsOn ? filterShortFilm(movies) : movies} />
    </section>
  );
};

export default Movies;
