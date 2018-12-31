import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './404Error';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Navigation from './Navigation'
import * as routes from './constants/Routes';
import NotFound from './404Error'
import '../sass/App.scss'

class App extends Component {
  constructor() {
    this.state = {
      validated: false
    }
  }

  componentDidMount() {
    let { validated } = this.state
    let input = prompt("This site requires a password for access, please enter it here")
    if(input === "banQuet3*9") {
      this.setState({validated: true})
    }
  }

  render() {
    let validated = this.state    
    if(validated) {
      return (
        <Fragment>
          <Navigation />
          <Switch>
          <Route
          exact path={routes.LANDING}
          component={LandingPage}
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
          exact path={routes.HOME}
          component={HomePage}
        />
        <Route
          exact path={routes.ACCOUNT}
          component={AccountPage}
        />
          </Switch>
        </Fragment>
      );
    } else {
      return <NotFound />
    }
  }
}

export default App;
