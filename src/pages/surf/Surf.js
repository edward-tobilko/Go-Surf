import React, { useContext } from 'react';
import './surf.css';
import SurfSlider from './../../components/surf/SurfSlider';
import SurfMap from './../../components/surf/SurfMap';
import Fade from 'react-reveal/Fade';
import { dataSurfSlider } from '../../data/DATA';
import { MyContext } from '../../context/MyContext';
import SurfSliderIcon from '../../components/surf/SurfSliderIcon';


const Surf = () => {

    const { paginationSurfMove, surfSlide } = useContext(MyContext);

    return (<>
        <section className='surf' id='surf'>
            <div className='names'>
                <h1 className='subTitle'>Surf</h1>
                <h1 className='title'>Surf</h1>
            </div>

            <Fade right delay={600}>

                {dataSurfSlider.map((item, index) =>
                    <div
                        className={surfSlide === index + 1 ? 'surf-right__text active7' : 'surf-right__text'}
                        key={item.id}
                        onClick={() => paginationSurfMove(index + 1)}
                    >
                        <div className='right__text'>
                            <div className="suptitle-line">Current location</div>
                            <div className="slider-item__info-text"> {item.subtitle} </div>
                        </div>
                    </div>
                )}

            </Fade>

            <SurfMap />

            <div className='surf__slider-icon'>
                <Fade delay={1000}>
                    <SurfSliderIcon />
                </Fade>
            </div>

            <SurfSlider />

        </section>
    </>)

}


export default Surf;