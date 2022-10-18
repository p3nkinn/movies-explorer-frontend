import React from "react";
import './SignForm.css';
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