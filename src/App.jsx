import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from "./firebase"

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){ 
        dispatch(login({
          email: userAuth.email,
          uid : userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
          description: userAuth.description,
        }));
      } else {  
        dispatch(logout())
      } 
    });
  }, []);

  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
          <Header /> 
          <div className="body-content container">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
