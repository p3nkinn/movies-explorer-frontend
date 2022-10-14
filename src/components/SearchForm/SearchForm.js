import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.png";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";

function SearchForm() {
  return (
    <section className="search">
      <div className="main-content">
          <form name="searchName" action="#" className="search__form">
            <input placeholder="Фильм" type="text" className="search__input">
            </input>
            <button type="submit" className="search__button">
                <img src={searchImage} className="form__img" alt="поиск"></img>
              </button>
              <div className="search__checkbox">
                <p className="search__short">
                Короткометражки
                </p>
                <FilterCheckBox />
              </div>
          </form>
      </div>
    </section>
  );
}

export default SearchForm;
