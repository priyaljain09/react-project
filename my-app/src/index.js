import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Header from './Header';
//import Display from './Display';
//import Tagore from './Tagore.jpg';
//import Event from './Event'
import Hook from './Hook.js';
import Hook2 from './Hook2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/>
    <App/>
    <Display/> */}
  
    <Hook/>
    <Hook2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

