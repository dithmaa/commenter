import React from 'react';

import './UserArea.scss';

import arrowDown from '../../assets/img/arrow-down.png';


const UserArea = ({userName = 'User Name', userImage = "https://sun9-78.userapi.com/s/v1/ig2/UypUG4MW5gGDueh03C94dx_GB_AxEMUuhS9E_x14KpuZmRM3bnJyvjskZyCnr4-LTCkecU5EQ12PLSaOVP43w0-f.jpg?size=1080x1006&quality=95&type=album"}) => {
    return (
        <div className="user-area">
            <h4 className="user-area__name">{userName}</h4>
            <div className="user-area__avatar">
                <img src={userImage} alt="" />
            </div>
            <div className="user-area__arrow">
                <img src={arrowDown} alt="" />
            </div>
        </div>
    )
}

export default UserArea