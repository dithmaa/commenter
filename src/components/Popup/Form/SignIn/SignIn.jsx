import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setAuth, setCurrentUserId } from '../../../../redux/auth-slice';

const SignIn = ({ toggleOnSecondForm, killPopup }) => {
    const dispath = useDispatch();
    //Users List
    const {usersList} = useSelector(({auth})=>auth);
    //form state 
    const [signinNameValue, setSigninNameValue] = React.useState('');
    const [signinPasswordValue, setSigninPasswordValue] = React.useState('');
    // form controller
    const handleSigninNameValue = (e) => {
        setSigninNameValue(e.target.value);
    }
    const handleSigninPasswordValue = (e) => {
        setSigninPasswordValue(e.target.value);
    }
    //Handle Signin 
    const handleSignin = (e) => {
        e.preventDefault();
        let yourUser = {            
            name: signinNameValue,
            password: signinPasswordValue
        }
        if(usersList.find((user)=>user.name.includes(signinNameValue)).password == signinPasswordValue) {
            dispath(setCurrentUserId(usersList.find((user)=>user.name.includes(signinNameValue)).id));
            dispath(setAuth(true));
            localStorage.setItem('currentUserId', JSON.stringify(usersList.find((user)=>user.name.includes(signinNameValue)).id));
            localStorage.setItem('isAuthed', true);
            killPopup();
        } else {
            console.error('Пользователь не найден. Вы не авторизованы');
        }
        
    }
    return (
        <form className="signin-form" onSubmit={handleSignin}>
            <div className="toggler">
                <span className="toggler__btn active">Sign In</span>
                <span className="toggler__btn" onClick={toggleOnSecondForm}>Sign Up</span>
            </div>
            <div className="popup-fields">
                <div className="main-input">
                    <h5 className="main-input__title">
                        Name
                    </h5>
                    <input onChange={handleSigninNameValue} value={signinNameValue} name="signin-name" type="text" placeholder="Your name" />
                </div>
                <div className="main-input">
                    <h5 className="main-input__title">
                        Password
                    </h5>
                    <input onChange={handleSigninPasswordValue} value={signinPasswordValue} name="signin-password" type="password" placeholder="Password" />
                </div>
            </div>
            <div className="popup-btn">
                <button type="submit" className="main-btn accent">
                    Sign In
                </button>
            </div>
        </form>
    )
}

export default SignIn