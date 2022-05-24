import React, { useContext } from 'react';
import './sleep.css';
import Fade from 'react-reveal/Fade';
import { dataTravelSlider } from '../../data/DATA';
import { MyContext } from '../../context/MyContext';
import SleepSlider from '../../components/sleep/SleepSlider';
import flower_small from './../../assets/flower_small.png';
import flower_big from './../../assets/flower_2.png';
import mammock from './../../assets/Hammock.png';
import TravelSliderIcon from '../../components/travel/TravelSliderIcon';


const Sleep = () => {

    const { travelSlide } = useContext(MyContext);

    return (
        <section className='sleep' id='sleep'>
            <div className='names'>
                <h1 className='subTitle'>Sleep</h1>
                <h1 className='title'>Sleep</h1>
            </div>

            <Fade right delay={500}>

                {dataTravelSlider.map((item, index) =>
                    <div
                        key={item.id}
                        className={travelSlide === index + 1 ? 'sleep-right__text active8' : 'sleep-right__text'}>
                        <div className="right__text">
                            <div className="suptitle-line">Resorts</div>
                            <div className="slider-item__info-text"> {item.title} </div>
                        </div>
                    </div>
                )}

            </Fade>

            <div className='sleep__slider-icon'>
                <TravelSliderIcon />
            </div>

            <SleepSlider />

            <Fade delay={600} right>
                <div className='sleep__background-images'>
                    <img src={mammock} alt='' className='sleep__hammock' />
                    <img src={flower_small} alt='' className='sleep__flower-small' />
                    <img src={flower_big} alt='' className='sleep__flower-big' />
                </div>
            </Fade>

        </section>
    )

}


export default Sleep;