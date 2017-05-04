// import React from 'react';
// import App from './components/App';
// import { BrowserRouter, Route } from 'react-router-dom';

// export default(
//   <BrowserRouter>
//     <Route exact path='/' component={App} />
//   </BrowserRouter>
// )

import React from 'react';
import App from './App';
import ProfileUpdate from './components/ProfileUpdate';
import { BrowserRouter, Route } from 'react-router-dom';
import userStore from './stores/UserStore';
import SignIn from './components/auth/SignIn';

export default (
  <BrowserRouter>
    <Route exact path='/' component={App} user={userStore} >
    </Route>
  </BrowserRouter>
)
