import React, { useContext } from 'react';
import '../../components/header/slider.css';
import arrowRight from './../../assets/svg/right-arrow.svg';
import arrowLeft from './../../assets/svg/left-arrow.svg';
import { MyContext } from '../../context/MyContext';


const SurfSliderIcon = () => {

    const { prevSurfSlide, nextSurfSlide } = useContext(MyContext);

    return (
        <div className='header__slider-nav'>
            <img
                onClick={prevSurfSlide}
                className='header__slider-nav__prev'
                src={arrowLeft}
                alt='' />
            <img
                onClick={nextSurfSlide}
                className='header__slider-nav__next'
                src={arrowRight}
                alt='' />
        </div>
    )

}


export default SurfSliderIcon;