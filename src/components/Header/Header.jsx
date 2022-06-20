import React from 'react';

import {UserArea} from '../UserArea';

import './Header.scss';

import logotype from '../../assets/img/logotype.png';
import logoutIcon from '../../assets/img/logout.png';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth, setCurrentUserId } from '../../redux/auth-slice';


const Header = ({setVisibleSignup, setVisibleMessage, toggleOnSecondForm, toggleOnFirstForm}) => {
    const dispath = useDispatch();
    const {currentUserId} = useSelector(({auth})=>auth);
    const {isAuthed} = useSelector(({auth})=>auth);
    const {usersList} = useSelector(({auth})=>auth);
    const currentUser = usersList.filter((user)=>user.id == currentUserId)[0];
  

    const showSignup = () => {
        setVisibleSignup(true);
        toggleOnSecondForm();
    }
    
    const showSignin = () => {
        setVisibleSignup(true);
        toggleOnFirstForm();
    }
    const showMessage = () => {
        setVisibleMessage(true);
    }
    // Сделать выход пользователя
    const logoutUser = () => {
        dispath(setCurrentUserId(null));
        dispath(setAuth(false));
        localStorage.removeItem('isAuthed');
        localStorage.removeItem('currentUserId');
    }

    return (
        <header className="header">

            <nav className="top-nav">
                <div className="container">
                    <div className="top-nav__left">
                        <div className="burger" onClick={showMessage}>
                            <span className="burger-line"></span>
                        </div>
                        <div className="logo">
                            <img src={logotype} alt="" />
                        </div>
                    </div>
                    <div className="header__user-area">
                        {
                            isAuthed ? 
                            <div className="logout-window">
                                <h5 className="logout-window__name">
                                    {
                                        currentUser ? currentUser.name : ''
                                    }
                                </h5>
                                <div className="logout-window__icon" onClick={logoutUser}>
                                    <img src={logoutIcon} alt='Logout Icon' />
                                </div>
                            </div>
                            : ''
                        }
                        
                        {
                            currentUserId ? 
                            <>
                            
                            <UserArea userName={currentUser ? currentUser.name : ''} userImage={currentUser ? currentUser.userImage : ''}/>
                            </>
                            : 
                            
                            <div className="login-area">
                                <button className="login-area__btn btn" onClick={showSignup}>Sign Up</button>
                                <button className="login-area__btn neon-btn" onClick={showSignin}>Sign In</button>
                            </div>
                        }
                        
                    </div>
                    
                </div>

            </nav>

        </header>
    )
}

export default Header