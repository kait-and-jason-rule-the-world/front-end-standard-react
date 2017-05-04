// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Router from './router';

// ReactDOM.render(
//   Router,
//   document.getElementById('root')
// )


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'
import './stylesheets/App.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route exact path='/sign_in' component={SignIn}/>
      <Route path='/register' component={Register}/>
    </Router>,
  document.getElementById('root')
);
