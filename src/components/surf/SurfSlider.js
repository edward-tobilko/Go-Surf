import React, { useContext } from "react";
import { dataSurfSlider } from "../../data/DATA";
import view from "./../../assets/icons/viewSurf.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MyContext } from "../../context/MyContext";
import { Fade } from "react-reveal";

const SurfSlider = () => {
  const { paginationSurfMove, surfSlide } = useContext(MyContext);

  return (
    <>
      <div className="surf__slider">
        <Fade bottom big cascade delay={1000}>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            {dataSurfSlider.map((item, index) => (
              <SwiperSlide
                key={item.id}
                onClick={() => paginationSurfMove(index + 1)}
                className={
                  surfSlide === index + 1
                    ? "surf__slider-item active3"
                    : "surf__slider-item"
                }
              >
                <div className="surf__slider-item__inner">
                  <img
                    src={item.img}
                    alt="Image 1"
                    className="surf__slider-img"
                  />
                  <div className="surf__slider-descriptions">
                    <div className="surf__slider-box__title">
                      {" "}
                      {item.title}{" "}
                    </div>
                    <div className="surf__slider-box__subtitle">
                      {" "}
                      {item.subtitle}{" "}
                    </div>
                    <img src={view} alt="" className="surf__slider-box__view" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>
    </>
  );
};

export default SurfSlider;
