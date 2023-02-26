import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost'
import GetAllPost from './components/GetAllPost'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (      
    <div>
        <Routes>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/" element={<GetAllPost/>}/>
       </Routes>
    </div> 
);
}

export default App;
