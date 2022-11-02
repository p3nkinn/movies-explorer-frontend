import React from "react";
import "./Profile.css";

const Profile = () => {

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
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
            defaultValue={"Виталий"}
            required
            className="profile__input profile__input_type_name"
          />
          <span
            className="name-input-error 
            profile__error profile__error_visible"
          ></span>
        </label>

        <label htmlFor="email" className="profile__form-label">
          E-mail
          <input
            name="email"
            type="email"
            aria-label="электронная почта"
            placeholder="E-mail"
            defaultValue={"pochta@yandex.ru"}
            className="profile__input profile__input_type_name"
            required
          />
          <span
            className="name-input-error
             profile__error profile__error_visible"
          ></span>
        </label>
        <button type="submit" className="profile__button-edit">
          Редактировать
        </button>
      </form>
      <button type="button" className="profile__button-logout">
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;
