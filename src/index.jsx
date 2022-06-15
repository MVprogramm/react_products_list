import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import user from './user.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <App userData={user()} />,
  rootElem
);