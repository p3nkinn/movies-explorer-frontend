import React from "react";
import "../SearchForm/SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="main-content">
        <div className="search__container">
          <form name="searchName" action="#" className="search__form">
          <input id="search-input" name="searchName" placeholder="Фильм" type="text" className="search__input search__input_type_searchname"></input>
          <button type="submit" className="search__find"></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
