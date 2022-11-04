import React from "react";
import SignForm from "../SignForm/SignForm";
import "./Register.css";
import { Link } from "react-router-dom";
import useFormValidation from "../../hook/useFormValidation";

const Register = ({onRegister}) => {
  const { values, handleChange, errors, isValid } =
    useFormValidation();

    const handleSubmit = (e) => {
      e.preventDefault();
      onRegister(values.name, values.email, values.password);
    }

  const LinkMark = (
    <p className="auth__paragraph">
      Уже зарегистрированы?{" "}
      <Link className="auth__link" to="/signin">
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
      LinkMark={LinkMark}
    >
      <label className="auth__input-error" htmlFor="name">
        Имя
        <input
          name="name"
          type="text"
          aria-label="имя"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          autoComplete="off"
          onChange={handleChange}
          required
          className="auth__input auth__input_type_name"
        />
        <span
          className={`name-input-error ${
            errors.name && "auth__error auth__error_visible"
          }`}
        >
          {errors.name}
        </span>
      </label>
      <label className="auth__input-error" htmlFor="email">
        E-mail
        <input
          name="email"
          type="email"
          aria-label="электронная почта"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="off"
          required
          className="auth__input auth__input_type_email"
        />
        <span
          className={`email-input-error ${
            errors.email && "auth__error auth__error_visible"
          }`}
        >
          {errors.email}
        </span>
      </label>
      <label className="auth__input-error" htmlFor="password">
        Пароль
        <input
          name="password"
          type="password"
          aria-label="Пароль"
          placeholder="Пароль"
          onChange={handleChange}
          minLength="8"
          autoComplete="off"
          value={values.password || ""}
          required
          className="auth__input auth__input_type_password"
        />
        <span
          className={`password-input-error ${
            errors.password && "auth__error auth__error_visible"
          }`}
        >
          {errors.password}
        </span>
      </label>
      <button
        type="submit"
        className={`${
          isValid ? "auth__button" : "auth__button auth__button_disabled"
        }`}
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
    </SignForm>
  );
};

export default Register;
