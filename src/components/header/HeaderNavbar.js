import React from "react";
import logo from "./../../assets/icons/Logo.svg";

import icon1 from "./../../assets/icons/Surf.svg";
import icon2 from "./../../assets/icons/Camp.svg";
import icon3 from "./../../assets/icons/Travel.svg";
import icon4 from "./../../assets/icons/Shop.svg";

const HeaderNavbar = ({ date, data }) => {
  /* change background navbar */

  function scrollNavbar() {
    const navbar = document.getElementById("header__navbar-menu__fixed");

    if (this.scrollY >= 50) navbar.classList.add("scroll-navbar");
    else navbar.classList.remove("scroll-navbar");
  }
  window.addEventListener("scroll", scrollNavbar);

  return (
    <div className="header__slider-navbar">
      <img src={logo} alt="" className="header__slider-logo" />
      <nav className="header__slider-menu">
        <ul className="header__navbar-menu" id="header__navbar-menu__fixed">
          <li className="header__slider-menu__item">
            <img src={icon1} alt="" className="header__slider-menu__img" />
            <a href="#surf" className="header__slider-menu__subtitle">
              Surf
            </a>
          </li>
          <li className="header__slider-menu__item">
            <img src={icon2} alt="" className="header__slider-menu__img" />
            <a href="#travel" className="header__slider-menu__subtitle">
              Travel
            </a>
          </li>
          <li className="header__slider-menu__item">
            <img src={icon3} alt="" className="header__slider-menu__img" />
            <a href="#sleep" className="header__slider-menu__subtitle">
              Sleep
            </a>
          </li>
          <li className="header__slider-menu__item">
            <img src={icon4} alt="" className="header__slider-menu__img" />
            <a href="#shop" className="header__slider-menu__subtitle">
              Shop
            </a>
          </li>
        </ul>
        <div className="header__slider-date">
          <h1 className="header__slider-date__title">{date.getDay()}</h1>
          <span className="header__slider-date__month">
            {date.getMonth()} | {date.getFullYear()}
          </span>
          <a
            target="blank"
            href="https://www.google.com/maps/place/%D0%9C%D0%B0%D0%B9%D0%B0%D0%BC%D0%B8,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%A8%D0%90/@25.7823404,-80.3695441,11z/data=!3m1!4b1!4m5!3m4!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65!8m2!3d25.7616798!4d-80.1917902"
            className="header__slider-location animate__animated animate__heartBeat animate__repeat-3 animate__slow"
          >
            {" "}
            {data.name}{" "}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
