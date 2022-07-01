import React from 'react';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className="app">
      <Header /> 
      <div className="body-content container">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
