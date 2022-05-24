import React, { useContext } from 'react';
import '../../components/header/slider.css';
import arrowRight from './../../assets/svg/right-arrow.svg';
import arrowLeft from './../../assets/svg/left-arrow.svg';
import { MyContext } from '../../context/MyContext';


const TravelSliderIcon = () => {

    const { prevTravelSlide, nextTravelSlide } = useContext(MyContext);

    return (
        <div className='header__slider-nav'>
            <img
                onClick={prevTravelSlide}
                className='header__slider-nav__prev'
                src={arrowLeft}
                alt='' />
            <img
                onClick={nextTravelSlide}
                className='header__slider-nav__next'
                src={arrowRight}
                alt='' />
        </div>
    )

}


export default TravelSliderIcon;