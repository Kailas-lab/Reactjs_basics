import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Usseeff from './hooks/Useeff';
//import Component1 from './Context/Example1';
import Component1 from './Context/Example2'; // Ensure this path is correct
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Component1 /> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();