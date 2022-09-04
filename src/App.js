import React from 'react';
import Header from './app/Components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
           <Header />
           <div className="app__body">
            <Sidebar />
           </div>
    </div>
  );
}

export default App;
