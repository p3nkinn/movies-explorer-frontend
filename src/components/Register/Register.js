import React from "react";
import SignForm from '../SignForm/SignForm';
import './Register.css';
import { Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
  };

  const LinkMark = (
    <p className="auth__paragraph">
      Уже зарегистрированы?{" "}
      <Link className="auth__link" to="/sign-in">
        Войти
      </Link>
    </p>
  );

  return (
    <SignForm
      onSubmit={handleSubmit}
      classAuth="auth__register"
      authTitle="Добро пожаловать!"
      formName="authRegister"
      formClass="auth__form auth__form_register"
      textBtn={"Зарегистрироваться"}
      LinkMark={LinkMark}
    >
      <label className="auth__input-error">
        <p className="auth__input-title">Имя</p>
        <input
          id="name-input"
          name="name"
          type="text"
          aria-label="имя"
          placeholder="Имя"
          required
          className="auth__input auth__input_type_name"
        />
        <span className="name-input-error auth__error auth__error_visible"></span>
      </label>
      <label className="auth__input-error">
      <p className="auth__input-title">E-mail</p>
        <input
          id="email-input"
          name="email"
          type="email"
          aria-label="электронная почта"
          placeholder="Email"
          value={email || ""}
          onChange={handleEmailChange}
          required
          className="auth__input auth__input_type_email"
        />
        <span className="name-input-error auth__error auth__error_visible"></span>
      </label>
      <label className="auth__input-error">
      <p className="auth__input-title">Пароль</p>
        <input
          id="password-input"
          name="password"
          type="password"
          aria-label="Пароль"
          placeholder="Пароль"
          value={password || ""}
          onChange={handlePasswordChange}
          required
          className="auth__input auth__input_type_userjob"
        />
        <span className="job-input-error auth__error auth__error_visible"></span>
      </label>
    </SignForm>
  );
};

export default Register;
