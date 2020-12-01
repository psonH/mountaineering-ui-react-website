import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App'
// Importing the Bootstrap CSS
// always put the bootstrap import before the index.css so that it doesn't override your css in the index.css file

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
