import React from 'react';
import { Popup } from "../Popup";

import { Message } from "../Popup/Message";
import { Form } from "../Popup/Form";
import { useSelector } from 'react-redux';

const Popups = ({isVisibleMessage, isVisibleSignup, killPopup, setVisibleMessage, setVisibleSignup, isSecondForm, toggleOnSecondForm, toggleOnFirstForm, isVisibleAuthSuccess, setVisibleAuthSuccess}) => {
    // Проверка, авторизовался ли пользователь
    const {isAuthed} = useSelector(({auth})=>auth);
    return (
        <>
            {
                isVisibleMessage &&
                <Popup killPopup={killPopup} setVisibleMessage={setVisibleMessage}>
                    <Message killPopup={killPopup}>
                        Here must be some menu,
                        but it does’t exist yet
                    </Message>
                </Popup>
            }
            {
                isVisibleAuthSuccess && <Popup killPopup={killPopup} >
                <Message killPopup={killPopup} >
                    You has been successful authed
                </Message>
            </Popup>
            }
                
            {
                
                isVisibleSignup && !isAuthed &&
                <Popup killPopup={killPopup} setVisibleSignup={setVisibleSignup}>
                    <Form
                        killPopup={killPopup}
                        isSecondForm={isSecondForm}
                        toggleOnSecondForm={toggleOnSecondForm}
                        toggleOnFirstForm={toggleOnFirstForm}
                        setVisibleAuthSuccess={setVisibleAuthSuccess}
                    />
                </Popup>
            }
        </>

    )
}

export default Popups