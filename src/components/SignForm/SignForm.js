import React from "react";
import "./SignForm.css";
import LogoForm from "../../images/head_logo.svg";
import { Link } from "react-router-dom";
const SignForm = ({
  classAuth,
  formName,
  formClass,
  authTitle,
  children,
  textBtn,
  onSubmit,
  LinkMark,
}) => {
  return (
    <div className={`auth ${classAuth}`}>
      <div className="auth__container">
        <form
          onSubmit={onSubmit}
          name={formName}
          action="#"
          className={formClass}
        >
          <Link className="auth__logo" to="/">
            <img src={LogoForm}  alt="логотип" />
          </Link>
          <h2 className="auth__title">{authTitle}</h2>
          {children}
          <button type="submit" className="auth__button">
            {textBtn}
          </button>
          {LinkMark}
        </form>
      </div>
    </div>
  );
};

export default SignForm;
