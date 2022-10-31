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
  onSubmit,
  LinkMark,
}) => {

  return (
    <div className={`auth ${classAuth}`}>
      <div className="auth__container">
        <form
          onSubmit={onSubmit}
          name={formName}
          className={formClass}
          noValidate
        >
          <Link className="auth__logo" to="/">
            <img src={LogoForm} alt="логотип" />
          </Link>
          <h2 className="auth__title">{authTitle}</h2>
          {children}
          {LinkMark}
        </form>
      </div>
    </div>
  );
};

export default SignForm;
