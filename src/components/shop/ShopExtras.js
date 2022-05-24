import React from 'react';
import extras_1 from '../../assets/Shop_Wax.png';
import extras_2 from '../../assets/Shop_Bracelet.png';
import { Rotate } from 'react-reveal';


const ShopExtras = () => {

    return (<>
        <Rotate bottom right delay={1000}>
            <div className='shop__extras'>
                <h1 className='shop__extras-title'>Extras</h1>
                <div className='shop__extras-list'>
                    <div className='shop__extras-item'>
                        <img src={extras_1} alt='' className='shop__extras-item__img' />
                        <h3 className='shop__extras-item__title'>Sex Wax</h3>
                        <p className='shop__extras-item__price'>$24.99</p>
                    </div>
                    <div className='shop__extras-item'>
                        <img src={extras_2} alt='' className='shop__extras-item__img' />
                        <h3 className='shop__extras-item__title'>Pura Vida</h3>
                        <p className='shop__extras-item__price'>$27.99</p>
                    </div>
                </div>
            </div>
        </Rotate>
    </>)

}


export default ShopExtras;