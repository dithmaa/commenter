import React from "react";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Popups } from "./components/Popups";
import axios from "axios";
import { setUsers } from "./redux/auth-slice";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispath = useDispatch(); // react-redux

  const [isVisibleSignup, setVisibleSignup] = React.useState(false);
  const [isVisibleMessage, setVisibleMessage] = React.useState(false);
  const [isVisibleAuthSuccess, setVisibleAuthSuccess] = React.useState(false);

  const [isSecondForm, setSecondForm] = React.useState(false);

  const toggleOnSecondForm = () => {
    setSecondForm(true);
  }
  const toggleOnFirstForm = () => {
    setSecondForm(false);
  }

  const killPopup = () => {
    setVisibleSignup(false);
    setVisibleMessage(false);
    setVisibleAuthSuccess(false);
  }
  //Получение пользователей с сервера
  React.useEffect(()=>{
    axios.get('http://localhost:8080/api/user/').then(({data}) => {
      dispath(setUsers(data));
    });  
  },[]);
  
  return (
    <div className="App">
      {
      <Popups
        isVisibleSignup={isVisibleSignup}
        isVisibleMessage={isVisibleMessage}
        killPopup={killPopup}
        setVisibleMessage={setVisibleMessage}
        setVisibleSignup={setVisibleSignup}
        isSecondForm={isSecondForm}
        toggleOnSecondForm={toggleOnSecondForm}
        toggleOnFirstForm={toggleOnFirstForm}

        isVisibleAuthSuccess={isVisibleAuthSuccess}
        setVisibleAuthSuccess={setVisibleAuthSuccess}
        /> 
       
      }
      
      <Header 
      toggleOnFirstForm={toggleOnFirstForm}
      toggleOnSecondForm={toggleOnSecondForm}
      setVisibleSignup={setVisibleSignup} 
      setVisibleMessage={setVisibleMessage} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
