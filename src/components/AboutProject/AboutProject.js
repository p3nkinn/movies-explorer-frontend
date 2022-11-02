import React from "react";
import "../AboutProject/AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about">
      <h2 className="about__title">
        О проекте
      </h2>
      <div className="about__wrapper">
        <div className="about__project">
          <h2 className="about__info">Дипломный проект включал 5 этапов</h2>
          <p className="about__descr">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__project">
          <h2 className="about__info">На выполнение диплома ушло 5 недель</h2>
          <p className="about__descr">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__jobwork">
        <div className="about__greenweek">
          <h3 className="about__subtitle_one">1 неделя</h3>
          <p className="about__subweek">Back-end</p>
        </div>
        <div className="about__greyweek">
          <h3 className="about__subtitle_four">4 недели</h3>
          <p className="about__subweek">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
