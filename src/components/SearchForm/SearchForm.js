import React from "react";
import "../SearchForm/SearchForm.css";
import searchImage from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";
import useFormValidation from "../../hook/useFormValidation";

const SearchForm = ({ onFilterChange , onSearch }) => {
  const [isError, setIsError] = React.useState("");
  const { values, handleChange, resetForm } = useFormValidation();
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values) {
      setIsError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setIsError('');
      }, 3000)
    } else {
      onSearch(values);
      resetForm();
    }
  }

  return (
    <div className="search">
      <form
        onSubmit={handleSubmit}
        name="searchName"
        noValidate
        className="search__form"
      >
        <input
          placeholder="Фильм"
          type="text"
          onChange={handleChange}
          value={values || ''}
          className="search__input"
          required
        ></input>
        <span
          className={`name-input-error ${
            isError && "auth__error auth__error_visible"
          }`}
        >
          {isError}
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
