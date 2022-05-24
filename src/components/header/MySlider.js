import React, { useState } from 'react';
import arrowRight from './../../assets/svg/right-arrow.svg';
import arrowLeft from './../../assets/svg/left-arrow.svg';
import './slider.css';
import { dataSlider } from './../../data/DATA';


const MySlider = () => {

    const [slide, setSlide] = useState(1); // start position slide;

    const nextSlide = () => {
        if (slide !== dataSlider.length) {
            setSlide(slide + 1);
        } else if (slide === dataSlider.length) { // callback to start position
            setSlide(1);
        }
    }

    const prevSlide = () => {
        if (slide !== 1) {
            setSlide(slide - 1);
        } else if (slide === 1) {
            setSlide(dataSlider.length);
        }
    }

    const paginationMove = (index) => {
        setSlide(index);
    }

    return (<>
        <div className='slider__nav'>
            <img
                onClick={prevSlide}
                src={arrowLeft}
                alt=''
                className='slider__nav-img'
            />
            <img
                onClick={nextSlide}
                src={arrowRight}
                alt=''
                className='slider__nav-img'
            />
        </div>

        <div className='slider'>
            {dataSlider.map((item, index) =>
                <div
                    key={item.id}
                    className={slide === index + 1 ? 'slider__item active' : 'slider__item'}>
                    <img src={`/image/img${index + 1}.png`} />

                    <div className='slider__text'>
                        <h2 style={{ color: 'black' }}> {item.title} </h2>
                        <h3 style={{ color: 'black' }}> {item.subTitle} </h3>
                    </div>

                    <div className='pagination'>
                        {Array.from({ length: 3 }).map((item, index) =>
                            <div
                                key={index}
                                onClick={() => paginationMove(index + 1)}
                                className={slide === index + 1 ? 'dot active' : 'dot'}></div>
                        )}
                    </div>

                </div>
            )}
        </div>

    </>)

}


export default MySlider;