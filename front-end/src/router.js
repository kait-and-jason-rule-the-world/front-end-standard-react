import React from 'react';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';

export default(
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>
)
