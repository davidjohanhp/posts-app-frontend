import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import CreatePost from './components/CreatePost'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Create />;
root.render(
  <React.StrictMode>
    <CreatePost />
  </React.StrictMode>
);

reportWebVitals();
