import React from "react";
import './Profile.css'
function Profile({onRegister}) {
    const [email, setEmail] = React.useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onRegister(email);
    };
    return (
      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" name="profile" action="#" onSubmit={handleSubmit}>
        <label className="profile__input-error">
        <p className="profile__name">Имя</p>
          <input
            id="name-input"
            name="name"
            type="text"
            aria-label="имя"
            placeholder="Имя"
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