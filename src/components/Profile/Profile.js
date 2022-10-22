import React from "react";
import './Profile.css'
function Profile({onChange}) {
    const [email, setEmail] = React.useState("Виталий");
    const [name, setName] = React.useState("pochta@yandex.ru");

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onChange(email);
    };
    return (
      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form onSubmit={handleSubmit} className="profile__form" noValidate name="profile" action="#">
        <label className="profile__input-error">
        <p className="profile__name">Имя</p>
          <input
            id="name-input"
            name="name"
            type="text"
            aria-label="имя"
            placeholder="Имя"
            value={name || ""}
            onChange={handleNameChange}
            required
            className="profile__input profile__input_type_name"
          />
          <span className="name-input-error auth__error auth__error_visible"></span>
        </label>
        <hr className="profile__divider"></hr>
        <label className="profile__input-error">
        <p className="profile__name">E-mail</p>
          <input
            id="email-input"
            name="email"
            type="email"
            aria-label="электронная почта"
            placeholder="E-mail"
            value={email || ""}
            onChange={handleEmailChange}
            required
            className="profile__input profile__input_type_email"
          />
          <span className="name-input-error auth__error auth__error_visible"></span>
        </label>
        <p className="profile__edit">Редактировать</p>
        <a href="/sign-in" className="profile__logout">Выйти из аккаунта</a>
        </form>
        </div>
    )
}

export default Profile;