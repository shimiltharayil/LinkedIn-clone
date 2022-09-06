import React from 'react';
import Header from './app/Components/Header';
import './App.css';
import Sidebar from '../src/app/Components/Sidebar'
import Feed from '../src/app/Components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from '../src/app/Components/Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
           <Header />
           {!user ? (
            <Login />
           ): (

             <div className="app__body">
            <Sidebar />
            <Feed />
           </div>
             )}
    </div>
  );
}

export default App;
