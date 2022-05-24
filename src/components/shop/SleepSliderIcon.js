import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import arrowRight from './../../assets/svg/right-arrow.svg';
import arrowLeft from './../../assets/svg/left-arrow.svg';


const SleepSliderIcon = () => {

    const { prevShopSlide, nextShopSlide } = useContext(MyContext);

    return (
        <div>
            <div className='header__slider-nav'>
                <img
                    onClick={prevShopSlide}
                    className='header__slider-nav__prev'
                    src={arrowLeft}
                    alt='' />
                <img
                    onClick={nextShopSlide}
                    className='header__slider-nav__next'
                    src={arrowRight}
                    alt='' />
            </div>
        </div>
    )

}


export default SleepSliderIcon;