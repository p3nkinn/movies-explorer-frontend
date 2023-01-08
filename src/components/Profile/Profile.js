import React from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../hook/useFormValidation";
import "./Profile.css";

const Profile = ({ signOut, onUpdateUser, isFail, isSuccess }) => {
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormValidation();

  const profileUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values.name, values.email);
    localStorage.setItem("currentUser", JSON.stringify(values));
    setIsValid(false);
  };
  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${profileUser.name}!`}</h2>
      <form className="profile__form">
        <label htmlFor="name" className="profile__form-label">
          Имя
          <input
            name="name"
            type="text"
            aria-label="имя"
            placeholder="Имя"
            minLength="2"
            maxLength="10"
            value={values.name || profileUser.name}
            onChange={handleChange}
            autoComplete="off"
            required
            className="profile__input profile__input_type_name"
          />
          <span
            className="name-input-error 
            profile__error profile__error_visible"
          >
            {errors.name}
          </span>
        </label>
        <label htmlFor="email" className="profile__form-label">
          E-mail
          <input
            name="email"
            type="email"
            minLength="6"
            maxLength="40"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            aria-label="электронная почта"
            placeholder="E-mail"
            value={values.email || profileUser.email}
            onChange={handleChange}
            className="profile__input profile__input_type_password"
            autoComplete="off"
            required
          />
          <span
            className="name-input-error
             profile__error profile__error_visible"
          >
            {errors.email}
          </span>
        </label>
        {isSuccess && (
            <p className="profile__error-success">Данные успешно изменены!</p>
          )}
          {isFail && (
            <p className="profile__error-fail">Ошибка при изменении данных!</p>
          )}
        <button
          type="button"
          onClick={handleSubmit}
          className={
            isValid &&
            (values.name !== profileUser.name ||
              values.email !== profileUser.email)
              ? "profile__button profile__button-disabled"
              : "profile__button"
          }
          disabled={
            (values.name === profileUser.name &&
              values.email === profileUser.email) ||
            !isValid
          }
        >
          Редактировать
        </button>
      </form>
      <Link
        to="/"
        onClick={signOut}
        type="button"
        className="profile__button-logout"
      >
        Выйти из аккаунта
      </Link>
    </div>
  );
};

export default Profile;
