import React, { useState } from "react";
import Loader from "./components/loader/Loader";
import Header from "./pages/header/Header";
import Surf from "./pages/surf/Surf";
import Travel from "./pages/travel/Travel";
import { MyContext } from "./context/MyContext";
import {
  dataShopSlider,
  dataSlider,
  dataSurfSlider,
  dataTravelSlider,
} from "./data/DATA";
import Sleep from "./pages/sleep/Sleep";
import Shop from "./pages/shop/Shop";
import Footer from "./pages/footer/Footer";

const App = () => {
  // hooks
  const [loader, setLoader] = useState(false);
  const [headerSlide, setHeaderSlide] = useState(1); // header block
  const [surfSlide, setSurfSlide] = useState(1); // surf block
  const [travelSlide, setTravelSlide] = useState(1); // travel block
  const [countNight, setCountNight] = useState(5); // sleep block
  const [countGuests, setCountGuests] = useState(4); // sleep block
  const [oneNight, setOneNight] = useState(55); // sleep block
  const [oneGuest, setOneGuest] = useState(25); // sleep block
  const [shopSlide, setShopSlide] = useState(1); // shop block

  const summa = countNight * oneNight + countGuests * oneGuest - 25; // sleep block

  // functions
  /* SliderIcon */
  const nextHeaderSlide = () => {
    if (headerSlide !== dataSlider.length) {
      setHeaderSlide(headerSlide + 1);
    } else if (headerSlide === dataSlider.length) {
      // callback to start position
      setHeaderSlide(1);
    }
  };

  const prevHeaderSlide = () => {
    if (headerSlide !== 1) {
      setHeaderSlide(headerSlide - 1);
    } else if (headerSlide === 1) {
      setHeaderSlide(dataSlider.length);
    }
  };

  const paginationMove = (index) => {
    setHeaderSlide(index);
  };

  /* SurfSliderIcon */
  const nextSurfSlide = () => {
    if (surfSlide !== dataSurfSlider.length) {
      setSurfSlide(surfSlide + 1);
    } else if (surfSlide === dataSurfSlider.length) {
      // callback to start position
      setSurfSlide(1);
    }
  };

  const prevSurfSlide = () => {
    if (surfSlide !== 1) {
      setSurfSlide(surfSlide - 1);
    } else if (surfSlide === 1) {
      setSurfSlide(dataSurfSlider.length);
    }
  };

  const paginationSurfMove = (index) => {
    setSurfSlide(index);
  };

  /* TravelSliderIcon */
  const nextTravelSlide = () => {
    if (travelSlide !== dataTravelSlider.length) {
      setTravelSlide(travelSlide + 1);
    } else if (travelSlide === dataTravelSlider.length) {
      // callback to start position
      setTravelSlide(1);
    }
  };

  const prevTravelSlide = () => {
    if (travelSlide !== 1) {
      setTravelSlide(travelSlide - 1);
    } else if (travelSlide === 1) {
      setTravelSlide(dataTravelSlider.length);
    }
  };

  const paginationTravelMove = (index) => {
    setTravelSlide(index);
  };

  /* SleepSliderIcon */
  const nextShopSlide = () => {
    if (shopSlide !== dataShopSlider.length) {
      setShopSlide(shopSlide + 1);
    } else if (shopSlide === dataShopSlider.length) {
      // callback to start position
      setShopSlide(1);
    }
  };

  const prevShopSlide = () => {
    if (shopSlide !== 1) {
      setShopSlide(shopSlide - 1);
    } else if (shopSlide === 1) {
      setShopSlide(dataShopSlider.length);
    }
  };

  const paginationShopMove = (index) => {
    setShopSlide(index);
  };

  /* SleepNightsBtn */
  const prevNight = () => {
    if (countNight <= 0) {
      return null;
    } else {
      setCountNight(countNight - 1);
    }
  };
  const nextNight = () => {
    if (countNight >= 30) {
      return null;
    } else {
      setCountNight(countNight + 1);
    }
  };

  /* SleepGuestsBtn */
  const prevGuest = () => {
    if (countGuests <= 0) {
      return null;
    } else {
      setCountGuests(countGuests - 1);
    }
  };
  const nextGuest = () => {
    if (countGuests >= 30) {
      return null;
    } else {
      setCountGuests(countGuests + 1);
    }
  };

  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);

  return (
    <>
      <MyContext.Provider
        value={{
          summa,
          headerSlide,
          countNight,
          countGuests,
          surfSlide,
          travelSlide,
          shopSlide,
          prevNight,
          nextHeaderSlide,
          prevHeaderSlide,
          paginationMove,
          nextNight,
          prevGuest,
          nextGuest,
          prevSurfSlide,
          nextSurfSlide,
          paginationSurfMove,
          nextTravelSlide,
          prevTravelSlide,
          paginationTravelMove,
          nextShopSlide,
          prevShopSlide,
          paginationShopMove,
        }}
      >
        {loader ? (
          <Loader />
        ) : (
          <div className="App">
            <Header />
            {/* <MySlider /> */}
            <div className="container">
              <Surf />
              <Travel />
              <Sleep />
              <Shop />
              <Footer />
            </div>

            {/* scroll up */}
            <a href="#" className="scrollUp" id="scroll-up">
              <i className="ri-arrow-up-line"></i>
            </a>
          </div>
        )}
      </MyContext.Provider>
    </>
  );
};

export default App;
