import React from 'react';
import Header from './app/Components/Header';
import './App.css';
import Sidebar from '../src/app/Components/Sidebar'
import Feed from '../src/app/Components/Feed';

function App() {
  return (
    <div className="app">
           <Header />
           <div className="app__body">
            <Sidebar />
            <Feed />
           </div>
    </div>
  );
}

export default App;
