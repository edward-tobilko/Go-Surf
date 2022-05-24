import React, { useContext } from "react";
import { dataSurfMapContent } from "../../data/DATA";
import surf from "./../../assets/svg/Surf.svg";
import water from "./../../assets/svg/Water.svg";
import wind from "./../../assets/svg/Wind.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { MyContext } from "../../context/MyContext";

const SurfMap = () => {
  const { paginationSurfMove, surfSlide } = useContext(MyContext);

  return (
    <>
      <Zoom delay={500} top>
        <div className="surf__map">
          <div className="surf__map-dots">
            <div
              className="surf__map-dot surf__map-dot--1"
              onClick={() => paginationSurfMove(1)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--2"
              onClick={() => paginationSurfMove(2)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--3"
              onClick={() => paginationSurfMove(3)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--4"
              onClick={() => paginationSurfMove(4)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--5"
              onClick={() => paginationSurfMove(5)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--6"
              onClick={() => paginationSurfMove(6)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--7"
              onClick={() => paginationSurfMove(7)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--8"
              onClick={() => paginationSurfMove(8)}
            ></div>
            <div
              className="surf__map-dot surf__map-dot--9"
              onClick={() => paginationSurfMove(9)}
            ></div>
            <div className="surf__map-dots__miniLocation--10"></div>
          </div>

          {dataSurfMapContent.map((item, index) => (
            <Fade delay={800} key={item.id}>
              <div
                className={
                  surfSlide === index
                    ? "surf__map-content active4"
                    : "surf__map-content"
                }
              >
                <div className="surf__map-content__top">
                  <div className="surf__map-content__top-title">
                    {" "}
                    {item.beach}{" "}
                  </div>
                  <div className="surf__map-content__top-subtitle">
                    {" "}
                    {item.country}{" "}
                  </div>
                </div>

                <div className="surf__map-content__bottom">
                  <div className="surf__map-content__bottom-column">
                    <img
                      className="surf__map-content__bottom-icon"
                      alt=""
                      src={surf}
                    />
                    <p className="surf__map-content__bottom-result">
                      {" "}
                      {item.surf.results}{" "}
                    </p>
                    <p className="surf__map-content__bottom-subtitle">
                      {" "}
                      {item.surf.subtitle}{" "}
                    </p>
                  </div>
                  <div className="surf__map-content__bottom-column">
                    <img
                      className="surf__map-content__bottom-icon"
                      alt=""
                      src={water}
                    />
                    <p className="surf__map-content__bottom-result">
                      {" "}
                      {item.woter.results}{" "}
                    </p>
                    <p className="surf__map-content__bottom-subtitle">
                      {" "}
                      {item.woter.subtitle}{" "}
                    </p>
                  </div>
                  <div className="surf__map-content__bottom-column">
                    <img
                      className="surf__map-content__bottom-icon"
                      alt=""
                      src={wind}
                    />
                    <p className="surf__map-content__bottom-result">
                      {" "}
                      {item.wind.results}{" "}
                    </p>
                    <p className="surf__map-content__bottom-subtitle">
                      {" "}
                      {item.wind.subtitle}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}

          <div className="surf__map-coordinates">34.0501 N -118.2446 W</div>
        </div>
      </Zoom>
    </>
  );
};

export default SurfMap;
