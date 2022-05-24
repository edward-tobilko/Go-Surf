import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { DataLineSlider } from '../../data/DATA';
import { Fade } from 'react-reveal';


const HeaderLineSlider = () => {

    const { headerSlide, paginationMove } = useContext(MyContext);

    return (<>
        <Fade bottom delay={1000}>
            <div className='header__slider-bottom'>

                {DataLineSlider.map((lineSlider, index) =>
                    <div
                        key={lineSlider.id}
                        className={headerSlide === index + 1 ? 'bottom__item-box active2' : 'bottom__item-box'}
                        onClick={() => paginationMove(index + 1)}
                    >
                        <div className='bootom__item-box__number'>
                            {lineSlider.number}
                        </div>
                        <div className='bootom__item-box__name'>
                            {lineSlider.title}
                        </div>
                    </div>
                )}

            </div>
        </Fade>
    </>)
}


export default HeaderLineSlider;

