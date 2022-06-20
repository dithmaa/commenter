import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { addUser } from '../../../../redux/auth-slice';

const SignUp = ({ toggleOnFirstForm, killPopup, setVisibleAuthSuccess }) => {
    // form controller
    const handleSignupNameValue = (e) => {
        setSignupNameValue(e.target.value);
    }
    const handleSignupSurnameValue = (e) => {
        setSignupSurnameValue(e.target.value);
    }
    const handleSignupPasswordValue = (e) => {
        setSignupPasswordValue(e.target.value);
    }
    //form state
    const [signupNameValue, setSignupNameValue] = React.useState('');
    const [signupSurnameValue, setSignupSurnameValue] = React.useState('');
    const [signupPasswordValue, setSignupPasswordValue] = React.useState('');

    

    //submit form
    const dispath = useDispatch();
    const { usersList } = useSelector(({ auth }) => auth);
    const usersListLastItemId = usersList.length ? usersList[usersList.length - 1].id : 0;

    const handleSignupSend = (e) => {
        e.preventDefault();
        let newUser = {
            id: usersListLastItemId + 1,
            name: signupNameValue,
            surname: signupSurnameValue,
            password: signupPasswordValue
        }
        dispath(addUser(newUser));

        axios.post('http://localhost:8080/api/user/', newUser).then((response) => ({response}));
        killPopup();
        setVisibleAuthSuccess(true);
    }
    return (
        <form className="signup-form" id="signup-form" onSubmit={handleSignupSend}>
            <div className="toggler">
                <span className="toggler__btn" onClick={toggleOnFirstForm}>Sign In</span>
                <span className="toggler__btn active">Sign Up</span>
            </div>
            <div className="popup-fields">
                <div className="main-input">
                    <h5 className="main-input__title">
                        Name
                    </h5>
                    <input onChange={handleSignupNameValue} value={signupNameValue} name="signup-name" type="text" placeholder="Your name" />
                </div>
                <div className="main-input">
                    <h5 className="main-input__title">
                        Surname
                    </h5>
                    <input onChange={handleSignupSurnameValue} value={signupSurnameValue} name="signup-surname" type="text" placeholder="Surname" />
                </div>
                <div className="main-input">
                    <h5 className="main-input__title">
                        Password
                    </h5>
                    <input onChange={handleSignupPasswordValue} value={signupPasswordValue} name="signup-password" type="password" placeholder="Password" />
                </div>
            </div>
            <div className="popup-btn">
                <button type="submit" className="main-btn accent">
                    Sign Up
                </button>
            </div>
        </form>
    )
}

export default SignUp