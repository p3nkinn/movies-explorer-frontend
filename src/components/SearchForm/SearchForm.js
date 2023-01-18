import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";
import useFormValidation from "../../hook/useFormValidation";

const SearchForm = ({
  handleFilterChange,
  onSearch,
  filterIsOn,
  searchValue,
}) => {
  const formWithValidation = useFormValidation();
  const { searchText } = formWithValidation.values;
  const { handleChange, resetForm } = formWithValidation;
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Нужно ввести ключевое слово");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      onSearch(searchText);
      setError("");
      resetForm();
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} noValidate className="search__form">
        <input
          placeholder={"Фильм" || searchValue}
          name="searchText"
          type="text"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={searchText}
          className="search__input"
          required
        ></input>
        <span
          className={
            error && `name-input-error ${"auth__error auth__error_visible"}`
          }
        >
          {error}
        </span>
        <button type="submit" className="search__button">
          <img src={searchImage} className="form__img" alt="поиск"></img>
        </button>
      </form>
      <FilterCheckBox
        filterIsOn={filterIsOn}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchForm;
