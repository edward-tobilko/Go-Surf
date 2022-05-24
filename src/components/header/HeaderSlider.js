import React, { useContext, useState } from "react";
import downArrow from "./../../assets/svg/down-arrow.svg";
import "./slider.css";
import HeaderLineSlider from "./HeaderLineSlider";
import { dataSlider } from "../../data/DATA";
import SliderIcon from "./SliderIcon";
import { useGetCurrentCityQuery } from "../../redux/currentCityAPI";
import Loader from "../loader/Loader";
import { Alert } from "@mui/material";
import HeaderInfo from "./HeaderInfo";
import HeaderBackMap from "./HeaderBackMap";
import HeaderNavbar from "./HeaderNavbar";
import { MyContext } from "./../../context/MyContext";
import Search from "../searchInput/Search";

const HeaderSlider = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { headerSlide } = useContext(MyContext);
  const { data, isLoading, isError } = useGetCurrentCityQuery();

  let date = new Date();

  if (isLoading) return <Loader />;
  if (isError) {
    return (
      <Alert variant="outlined" severity="error">
        {" "}
        Something Wrong{" "}
      </Alert>
    );
  }

  return (
    <>
      <div className="header__slider">
        <div className="header__slider-backWrapper">Go Surf</div>
        <HeaderBackMap />

        {showSearch ? <Search /> : null}

        <a
          href="#"
          className="header__slider-search"
          onClick={() => setShowSearch(!showSearch)}
        >
          <i className="ri-search-line"></i>
        </a>

        <HeaderNavbar data={data} date={date} />
        <SliderIcon />

        {dataSlider.map((item, index) => (
          <div
            key={item.id}
            className={
              headerSlide === index + 1
                ? "header__slider-item active"
                : "header__slider-item"
            }
          >
            <a href="#surf" className="slider-item__info-link">
              <img
                src={downArrow}
                alt=""
                className="animate__animated animate__fadeInDown animate__infinite animate__slow"
              />
            </a>
            <HeaderInfo item={item} />
            <HeaderLineSlider />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderSlider;
