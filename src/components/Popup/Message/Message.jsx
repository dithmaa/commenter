import React from 'react';
import emptyIcon from '../../../assets/img/empty.png';

const Message = ({killPopup, children}) => {
    return (
        <>
            <div className="popup-message">
                <div className="popup-icon">
                    <img src={emptyIcon} alt="empty-icon" />
                </div>
                <p className="popup-text">
                    {
                        children
                    }
                </p>
            </div>

            <div className="popup-btn">
                <button className="main-btn accent" onClick={killPopup}>
                    Got it
                </button>
            </div>
        </>
    )
}

export default Message