import React, { useContext } from "react";
import TravelSlider from "../../components/travel/TravelSlider";
import "./travel.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { dataTravelSlider } from "../../data/DATA";
import airPlain from "./../../assets/airplain.png";
import coctail from "./../../assets/cocktail_2.png";
import { MyContext } from "../../context/MyContext";
import TravelSliderIcon from "../../components/travel/TravelSliderIcon";

const Travel = () => {
  const { travelSlide } = useContext(MyContext);

  return (
    <section className="travel" id="travel">
      <div className="names">
        <h1 className="subTitle">Travel</h1>
        <h1 className="title">Travel</h1>
      </div>

      {dataTravelSlider.map((item, index) => (
        <Fade right delay={500} key={item.id}>
          <div
            className={
              travelSlide === index + 1
                ? "travel-right__text active6"
                : "travel-right__text"
            }
          >
            <div className="right__text">
              <div className="suptitle-line">Shore</div>
              <div className="slider-item__info-text"> {item.title} </div>
            </div>
          </div>
        </Fade>
      ))}

      <div className="surf__slider-icon">
        <Fade delay={500}>
          <TravelSliderIcon />
        </Fade>
      </div>

      <TravelSlider />

      <Fade delay={800} right>
        <img src={airPlain} alt="" className="slider__airplain" />
      </Fade>

      <Bounce top delay={1000}>
        <img src={coctail} alt="" className="travel__slider-coctail__img" />
      </Bounce>
    </section>
  );
};

export default Travel;
