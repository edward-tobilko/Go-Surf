import React from "react";
import ShopSlider from "../../components/shop/ShopSlider";
import SleepSliderIcon from "../../components/shop/SleepSliderIcon";
import "./shop.css";
import board from "../../assets/Shop_Surfboard.png";
import oval from "../../assets/icons/shop-oval.png";
import plus from "../../assets/svg/plus.svg";
import ShopExtras from "../../components/shop/ShopExtras";

const Shop = () => {
  const textOne = "Double Concave with Vee Shape low point";
  const textTwo = "Single simple with midpoint Vee Shape";
  const textTree = `Medium hard with midpoint Caal point`;

  return (
    <section className="shop" id="shop">
      <div className="names">
        <h1 className="subTitle">Shop</h1>
        <h1 className="title">Shop</h1>
      </div>

      <div className="sleep__slider-icon">
        <SleepSliderIcon />
      </div>

      <ShopSlider />

      <div className="shop__board">
        <img src={board} alt="" className="shop__board-img" />
        <div className="tooltip__one" data-tooltip={textOne}>
          <img src={oval} alt="" className="shop__oval" />
          <img src={plus} alt="" className="shop__oval" />
        </div>
        <div className="tooltip__two" data-tooltip={textTwo}>
          <img src={oval} alt="" className="shop__oval-2" />
          <img src={plus} alt="" className="shop__oval-2" />
        </div>
        <div className="tooltip__tree" data-tooltip={textTree}>
          <img src={oval} alt="" className="shop__oval-3" />
          <img src={plus} alt="" className="shop__oval-3" />
        </div>
      </div>

      <ShopExtras />
    </section>
  );
};

export default Shop;
