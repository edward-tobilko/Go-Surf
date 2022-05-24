import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { MyContext } from '../../context/MyContext';
import { dataShopSlider } from '../../data/DATA';
import shop_view from '../../assets/icons/view_shop.png';


const ShopSlider = () => {

    const { shopSlide } = useContext(MyContext);

    return (
        <div className='shop__slider'>

            {dataShopSlider.map((item, index) =>
                <Fade left delay={700} key={item.id}>
                    <div className={shopSlide === index + 1 ? 'shop__slider-left active10' : 'shop__slider-left'}>
                        <div className="right__text-line">Style</div>
                        <div className="slider-item__info-text--shop"> {item.title} </div>
                        <img src={item.stars} alt='' className='shop__stars' />
                        <div className="shop__left-price"> ${item.price} </div>
                    </div>
                </Fade>
            )}

            <Fade left delay={800}>
                <img src={shop_view} alt='' className='shop__view' />
            </Fade>

        </div>
    )

}


export default ShopSlider;