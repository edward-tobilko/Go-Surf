import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import view_sleep from './../../assets/icons/view_sleep.png';
import { dataTravelSlider } from '../../data/DATA';
import SleepNightsBtn from '../buttons/SleepNightsBtn';
import { MyContext } from '../../context/MyContext';
import SleepGuestsBtn from '../buttons/SleepGuestsBtn';


const SleepSlider = () => {

    const { countNight, countGuests, travelSlide, summa } = useContext(MyContext);

    return (<>
        <div className='sleep__slider'>

            {dataTravelSlider.map((item, index) =>
                <Fade left delay={1000} key={item.id}>
                    <div className={travelSlide === index + 1 ? 'sleep__left-slider active9' : 'sleep__left-slider'}>
                        <div className='travel__slider-left__text'>
                            <div className="right__text">
                                <div className="right__text-line">Rating</div>
                                <div className="slider-item__info-text"> {item.rating} </div>
                                <img src={item.stars} alt='' className='sleep__stars' />
                            </div>
                        </div>
                    </div>
                </Fade>
            )}

            {dataTravelSlider.map((item, index) =>
                <div key={item.id} className={travelSlide === index + 1 ? 'travel__slider-info active5' : 'travel__slider-info'}>
                    <div className='travel__slider-info__row'>
                        <div className='travel__slider-info__suptitle'>Resort</div>
                        <div className='travel__slider-info__title'> {item.title} </div>
                    </div>
                    <div className='travel__slider-info__row'>
                        <div className='travel__slider-info__suptitle'># of Nights</div>
                        <div className='travel__slider-info__title'> {countNight} Nights </div>
                        <SleepNightsBtn />
                    </div>
                    <div className='travel__slider-info__row'>
                        <div className='travel__slider-info__suptitle'># of Guests</div>
                        <div className='travel__slider-info__title'> {countGuests} Guests </div>
                        <SleepGuestsBtn />
                    </div>
                    <div className='travel__slider-info__row'>
                        <div className='travel__slider-info__suptitle'>Pricing</div>
                        <div className='travel__slider-info__title'> $ {summa} USD </div>
                        <div className='travel__slider-info__subtitle'>Per Night</div>
                    </div>
                </div>
            )}

            <Fade left delay={600}>
                <div className='sleep__slider-btn'>
                    <img src={view_sleep} alt='' className='sleep__slider-btn__img' />
                </div>
            </Fade>

        </div>
    </>)

}


export default SleepSlider;