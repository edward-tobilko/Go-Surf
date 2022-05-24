import React from 'react';
import view_footer from '../../assets/icons/view_footer.png';
import './footer.css';


const Footer = () => {

    return (
        <footer className='footer'>
            <img src={view_footer} alt='' className='footer__view' />
            <div className='foooter__copyright'>
                © Go-Surf 2022. All Rights Reserved.
            </div>
        </footer>
    )

}


export default Footer;