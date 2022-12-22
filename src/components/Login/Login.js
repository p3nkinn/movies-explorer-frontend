import React from "react";
import SignForm from "../SignForm/SignForm";
import { Link } from "react-router-dom";
import useFormValidation from "../../hook/useFormValidation";
const Login = ({onLogin, messageError}) => {

  const { values, handleChange, errors, isValid} =
    useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  }

  const LinkMark = (
    <p className="auth__paragraph">
      Ещё не зарегистрированы?{" "}
      <Link className="auth__link" to="/signup">
      Регистрация
      </Link>
    </p>
  );

  return (
    <SignForm
      onSubmit={handleSubmit}
      classAuth="auth__register"
      authTitle="Рады видеть!"
      formName="authLogin"
      formClass="auth__form auth__form_register"
      LinkMark={LinkMark}
    >
      <label htmlFor="email" className="auth__input-error">
      E-mail
        <input
          name="email"
          type="email"
          aria-label="электронная почта"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
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
      <label htmlFor="password" className="auth__input-error">
      Пароль
        <input
          name="password"
          type="password"
          aria-label="Пароль"
          placeholder="Пароль"
          minLength="8"
          value={values.password || ""}
          onChange={handleChange}
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
      {messageError && (
            <span className="auth__error">{messageError}</span>
          )}
      <button
        type="submit"
        className={`${
          isValid ? "auth__button" : "auth__button auth__button_disabled"
        }`}
        disabled={!isValid}
      >
        Войти
      </button>
    </SignForm>
  );
};

export default Login;
