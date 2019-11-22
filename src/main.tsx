import React = require('react');
import ReactDOM = require('react-dom');

window.onload = () => {
  const element = <h1>Hello, react!</h1>;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
};
