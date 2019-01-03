import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Navigation from './Navigation'
import Footer from './Footer';
import * as routes from './constants/Routes';

import NotFound from './404Error'
import '../sass/App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
      return (
        <Fragment>
          <Navigation />
          <Switch>
          <Route
          exact path={routes.HOME}
          component={HomePage}
        />
        <Route
          exact path={routes.SIGN_IN}
          component={SignInPage}
        />
        <Route
          exact path={routes.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route
          exact path={routes.ACCOUNT}
          component={AccountPage}
        />
          </Switch>
        <Footer />
        </Fragment>
      );
  }
}

export default App;
