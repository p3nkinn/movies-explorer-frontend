import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";

const SearchForm = () => {
  return (
    <div className="search">
      <form name="searchName" action="#" className="search__form">
        <input
          placeholder="Фильм"
          type="text"
          className="search__input"
          required
        ></input>
        <button type="submit" className="search__button">
          <img src={searchImage} className="form__img" alt="поиск"></img>
        </button>
      </form>
      <FilterCheckBox />
    </div>
  );
}

export default SearchForm;
