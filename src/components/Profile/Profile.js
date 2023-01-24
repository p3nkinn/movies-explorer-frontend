import React from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../hook/useFormValidation";
import "./Profile.css";

const Profile = ({ signOut, onUpdateUser, isFail, isSuccess, currentUser }) => {
  const { values, handleChange, errors, isValid, setIsValid, setValues } =
    useFormValidation();

    React.useEffect(() => {
      setValues(currentUser.data);
      setIsValid(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  const handleSubmit = () => {
    onUpdateUser(values.name, values.email);
    setIsValid(false);
  };

  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.data.name}!`}</h2>
      <form noValidate className="profile__form">
        <label htmlFor="name" className="profile__form-label">
          Имя
          <input
            name="name"
            type="text"
            aria-label="имя"
            placeholder="Имя"
            minLength="2"
            maxLength="10"
            value={values.name || ''}
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
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            aria-label="электронная почта"
            placeholder="E-mail"
            value={values.email || ''}
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
          className={(
            isValid &&
            (values.name !== currentUser.data.name || values.email !== currentUser.data.email))
              ? "profile__button profile__button-disabled"
              : "profile__button"
          }
          disabled={
            (values.name === currentUser.data.name &&
            values.email === currentUser.data.email) ||
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
