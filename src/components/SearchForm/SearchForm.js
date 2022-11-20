import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";


const SearchForm = ({ onFilterChange , onSearchMovies, onSearch, onSearchSavedMovies }) => {
  const [search, setSearch] = React.useState('')

  function handleSearchChange(e){
    setSearch(e.target.value);
    onSearch(e.target.value);
    handleValue(e);
  }
  function handleValue(e){
    onSearch(e.target.value);
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    onSearchMovies(search);
  }

  function handleSearchSavedMovies(e) {
    e.preventDefault();
    onSearchSavedMovies(search);
  }

  return (
    <div className="search">
      <form
        onSubmit={handleSearchMovies}
        noValidate
        className="search__form"
      >
        <input
          placeholder="Фильм"
          name="searchFilms"
          type="text"
          onChange={handleSearchChange}
          value={search || ''}
          className="search__input"
          required
        ></input>
        <span
          className={`name-input-error ${
            "auth__error auth__error_visible"
          }`}
        >
          
        </span>
        <button type="submit" className="search__button">
          <img src={searchImage} className="form__img" alt="поиск"></img>
        </button>
      </form>
      <FilterCheckBox onFilterChange={onFilterChange} />
    </div>
  );
};

export default SearchForm;
