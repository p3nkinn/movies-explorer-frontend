import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.png";

function SearchForm() {
  return (
    <section className="search">
      <div className="main-content">
        <div className="search__container">
          <form name="searchName" action="#" className="search__form">
            <input className="search__input">
            </input>
            <button type="submit" className="search__button">
                <img src={searchImage} className="form__img" alt="поиск"></img>
              </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
