import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dog from './components/Dog';
import Cat from './components/Cat';
import FavColor from './components/FavColor';
import Classs from './components/Class';
import Scooter from './components/Scooter';
//import Header from './components/Header';
//import Counter from './components/counter'; // Correct casing
import Example from './components/Counter'; // Ensure Example is properly exported from the file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cat /> */}
    {/* <Header /> */}
    <FavColor />
    <Classs />
    <Scooter />
    <Counter />
    <Example />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
