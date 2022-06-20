import React from 'react';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';



const Form = ({ isSecondForm, toggleOnSecondForm, toggleOnFirstForm, killPopup, setVisibleAuthSuccess }) => {
    
    return (
        <>
            {
                !isSecondForm ?
                    <SignIn 
                    toggleOnSecondForm={toggleOnSecondForm} 
                    killPopup={killPopup}
                    />
                    :
                    <SignUp 
                    toggleOnFirstForm={toggleOnFirstForm}
                    killPopup={killPopup}
                    setVisibleAuthSuccess={setVisibleAuthSuccess}
                    />
            }
        </>
    )
}

export default Form