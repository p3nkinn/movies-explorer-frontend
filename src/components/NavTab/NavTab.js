import React from "react";
import '../NavTab/NavTab.css';

function NavTab() {
    return (
        <section className="navtab">
            <nav className="navtab__wrapper">
                <a className="navtab__link" href="#about">О проекте</a>
                <a className="navtab__link" href="#technology">Технологии</a>
                <a className="navtab__link" href="#student">Студент</a>
            </nav>
        </section>
    );
}

export default NavTab;