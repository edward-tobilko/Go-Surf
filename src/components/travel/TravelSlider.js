import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import travelBrand from "./../../assets/icons/travel_brand.png";
import { dataTravelSlider } from "../../data/DATA";
import viewTravel from "./../../assets/icons/view_travel.png";
import { MyContext } from "../../context/MyContext";

const TravelSlider = () => {
  const { travelSlide } = useContext(MyContext);

  return (
    <>
      <div className="travel__slider">
        <Fade left delay={1000}>
          <div className="travel__slider-left__text">
            <div className="right__text">
              <div className="right__text-line">Airline</div>
              <div className="slider-item__info-text">Virgin Australia</div>
              <img
                src={travelBrand}
                alt=""
                className="travel__slider-brand__img"
              />
            </div>
          </div>
        </Fade>

        {dataTravelSlider.map((item, index) => (
          <div
            className={
              travelSlide === index + 1
                ? "travel__slider-info active5"
                : "travel__slider-info"
            }
            key={item.id}
          >
            <div className="travel__slider-info__row">
              <div className="travel__slider-info__suptitle">Destination</div>
              <div className="travel__slider-info__title">
                {" "}
                {item.destination}{" "}
              </div>
            </div>
            <div className="travel__slider-info__row">
              <div className="travel__slider-info__suptitle">Distance</div>
              <div className="travel__slider-info__title">
                {" "}
                {item.distance}{" "}
              </div>
            </div>
            <div className="travel__slider-info__row">
              <div className="travel__slider-info__suptitle">Travel Time</div>
              <div className="travel__slider-info__title">
                {" "}
                {item.travelTime}{" "}
              </div>
            </div>
            <div className="travel__slider-info__row">
              <div className="travel__slider-info__suptitle">Pricing</div>
              <div className="travel__slider-info__title"> {item.pricing} </div>
              <div className="travel__slider-info__subtitle">Round Trip</div>
            </div>
          </div>
        ))}
      </div>

      <Fade left delay={1000}>
        <div className="travel__slider-btn">
          <img src={viewTravel} alt="" className="travel__slider-btn__img" />
        </div>
      </Fade>
    </>
  );
};

export default TravelSlider;
