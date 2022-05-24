import React, { useContext } from 'react';
import './slider.css';
import arrowRight from './../../assets/svg/right-arrow.svg';
import arrowLeft from './../../assets/svg/left-arrow.svg';
import { MyContext } from '../../context/MyContext';


const SliderIcon = () => {

    const { prevHeaderSlide, nextHeaderSlide } = useContext(MyContext);

    return (
        <div className='header__slider-nav'>
            <img
                onClick={prevHeaderSlide}
                className='header__slider-nav__prev'
                src={arrowLeft}
                alt='' />
            <img
                onClick={nextHeaderSlide}
                className='header__slider-nav__next'
                src={arrowRight}
                alt='' />
        </div>
    )

}


export default SliderIcon;