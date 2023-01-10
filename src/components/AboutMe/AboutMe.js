import React from "react";
import "../AboutMe/AboutMe.css";
import studentsPhoto from "../../images/student_photo.jpg";
const AboutMe = () => {
  return (
    <section id="students" className="students">
      <h2 className="students__title">Студент</h2>
      <div className="students__wrapper">
        <div className="students__info">
          <h3 className="students__subtitle">Виталий</h3>
          <p className="students__skill">Фронтенд-разработчик, 30 лет</p>
          <p className="students__descr">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/p3nkinn" className="students_link">
            Github
          </a>
        </div>
        <img
          src={studentsPhoto}
          className="students__image"
          alt="фотография студента"
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;
