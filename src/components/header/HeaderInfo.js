import React from 'react';
import { Fade } from 'react-reveal';


const HeaderInfo = ({ item }) => {

    return (<>
        <Fade right delay={700}>
            <div className="slider-item__info">
                <div className="slider-item__info-suptitle suptitle-line">Surf</div>
                <div className="slider-item__info-title"> {item.title} </div>
                <div className="slider-item__info-suptext suptitle-line">Condition</div>
                <div className="slider-item__info-text">Radical</div>
            </div>
        </Fade>
    </>)

}


export default HeaderInfo;