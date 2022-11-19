import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useFormValidation from "../../hook/useFormValidation";
import "./Profile.css";

const Profile = ({signOut, onUpdateUser}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid = false, setIsValid } =
    useFormValidation();

    const profileUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdateUser(values.name, values.email);
      localStorage.setItem('currentUser', JSON.stringify(values));
      setIsValid(false);
    }
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
            required
            className="profile__input profile__input_type_name"
          />
          <span
            className="name-input-error 
            profile__error profile__error_visible"
          >{errors.name}</span>
        </label>

        <label htmlFor="email" className="profile__form-label">
          E-mail
          <input
            name="email"
            type="email"
            aria-label="электронная почта"
            placeholder="E-mail"
            value={values.email || profileUser.email}
            onChange={handleChange}
            className="profile__input profile__input_type_name"
            required
          />
          <span
            className="name-input-error
             profile__error profile__error_visible"
          >{errors.email}</span>
        </label>
        <button type="button" onClick={handleSubmit} className={`profile__button-edit ${!isValid && 'profile__button-disabled'}`} disabled={(values.name === profileUser.name && values.email === profileUser.email) || !isValid}>
          Редактировать
        </button>
      </form>
      <Link to="/" onClick={signOut} type="button" className="profile__button-logout">
        Выйти из аккаунта
      </Link>
    </div>
  );
};

export default Profile;
