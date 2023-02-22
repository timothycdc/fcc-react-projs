import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const script = document.createElement("script");
script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
script.async = true;
document.body.appendChild(script);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

