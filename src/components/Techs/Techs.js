import React from "react";
import "../Techs/Techs.css";

function Techs() {
  return (
    <section id="technology" className="techs">
      <div className="main-content">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__info">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__descr">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__about">
          <li className="techs__framework">
            <p className="techs__language">HTML</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">CSS</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">JS</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">React</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">Git</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">Express.js</p>
          </li>
          <li className="techs__framework">
            <p className="techs__language">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
