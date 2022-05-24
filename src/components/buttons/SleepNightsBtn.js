import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import plus from '../../assets/svg/plus.svg';


const SleepNightsBtn = () => {

    const { nextNight, prevNight } = useContext(MyContext);

    return (
        <div className='travel__slider-btns'>
            <div
                className='sleep__slider-minus'
                onClick={prevNight}>&#8722;</div>
            <div
                className='sleep__slider-plus'
                onClick={nextNight}><img src={plus} alt='' /></div>
        </div>
    )

}


export default SleepNightsBtn;