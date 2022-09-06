import React, { useEffect } from 'react';
import Header from './app/Components/Header';
import './App.css';
import Sidebar from '../src/app/Components/Sidebar'
import Feed from '../src/app/Components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from '../src/app/Components/Login';
import { auth } from './firebase';
import Widgets from './app/Components/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
      useEffect (() => {
        auth.onAuthStateChanged(userAuth => {
          if (userAuth){
            //user login
            dispatch(
              login({
                email:userAuth.user.email,    
                uid:userAuth.user.uid,
                displayName:userAuth.displayName,
                photoUrl:userAuth.photoURL,
              })
            )
          } else {
            //user logout
            dispatch(logout())
          }
        })
      })
  return (
    <div className="app">
           <Header />
           {!user ? (
            <Login />
           ): (

             <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
           </div>
             )}
    </div>
  );
}

export default App;
