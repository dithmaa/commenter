import React from 'react';

import './Footer.scss';


import vkIcon from '../../assets/img/Vk.png';
import tgIcon from '../../assets/img/Telegram.png';
import ghIcon from '../../assets/img/Github.png';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="social">
                <a href="#" className="social__item">
                    <img src={vkIcon} alt="Vk-icon" />
                </a>
                <a href="#" className="social__item">
                    <img src={tgIcon} alt="telegram-icon" />
                </a>
                <a href="#" className="social__item">
                    <img src={ghIcon} alt="github-icon" />
                </a>
            </div>
            <p className="footer__text">
            Copyright © 2017-2022 by <a href="#">Postered</a> <br />
            design by <a href="#">Nomto Baltukov</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer