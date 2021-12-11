import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/Home';
import Navigation from './components/Navigation';
import PlayPage from './components/Play';
import signUpPage from './components/SignUp';
import signInPage from './components/SignIn';
import passwordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';

import * as ROUTES from './constants/routes';

//If a route matches a path prop, the respective component will be displayed; 
//thus, all the page components in the App component are exchangeable by changing the route, 
//but the Navigation component stays fixed independently of any route changes.

function App() {
  return (
    <div className="App">
    <h1>Welcome to my app!</h1>
      <Router>
        <div>
          <Navigation/>

          <Routes>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.PLAY} component={PlayPage} />
            <Route path={ROUTES.SIGN_IN} component={signInPage} />
            <Route path={ROUTES.SIGN_UP} component={signUpPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={passwordForgetPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </Routes>

          </div>
      </Router>
    </div>
  );
}

export default App;
