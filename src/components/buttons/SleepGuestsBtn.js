import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import plus from '../../assets/svg/plus.svg';


const SleepGuestsBtn = () => {

    const { nextGuest, prevGuest } = useContext(MyContext);

    return (
        <div className='travel__slider-btns'>
            <div
                className='sleep__slider-minus'
                onClick={prevGuest}>&#8722;</div>
            <div
                className='sleep__slider-plus'
                onClick={nextGuest}><img src={plus} alt='' /></div>
        </div>
    )

}


export default SleepGuestsBtn;