import React from 'react';

import './Popup.scss';


import closeIcon from '../../assets/img/close.png';

const Popup = ({killPopup, children}) => {
    return (
        <div className="popup-window">
            <div className="overlay"></div>
            <div className="popup">
                <div className="popup-close" onClick={killPopup}>
                    <img src={closeIcon} alt="close-icon" />

                </div>
                {
                    <div className="popup-content">
                        {
                            children
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Popup