import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/* JSX functions go here */
function Header() {
  return (
    <div id="header">
      <div id="logo"><img alt="" src={require('./images/logo_v2.gif')} /></div>
    </div>
  );
}

/* JSX variable declarations go here */

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
