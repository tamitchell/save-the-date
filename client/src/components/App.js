import React, { Component, Fragment } from 'react';
import { withFirebase } from '../firebase/index';
import {Route, Switch} from 'react-router-dom'
import {SignInPage} from './SignIn';
import { SignUpPage } from './SignUp/SignUp';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home/Home';
import AccountPage from './Account';
import Navigation from './Navigation';
import RSVPFORM from "./RSVP/RSVPParentContainer";
import Footer from './Footer';
import * as routes from './constants/Routes';
import NotFound from './404Error'
import '../sass/App.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
      return (
        <Fragment>
          <Navigation authUser={this.state.authUser} />
          <Switch>
          <Route
          exact path={routes.HOME}
          render={(isAuth) => <HomePage isAuth={this.state.authUser}/>}
        />
        <Route
          path={routes.SIGN_IN}
          component={SignInPage}
        />
        <Route
          path={routes.RSVP}
          component={RSVPFORM}
        />
         <Route
          path={routes.SIGN_UP}
          component={SignUpPage}
        />
        <Route
          path={routes.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route
          path={routes.ACCOUNT}
          render={(isAuth) => <AccountPage user={this.state.authUser} />}
        />
        <Route component={NotFound}/>
          </Switch>
        <Footer />
        </Fragment>
      );
  }
}

export default withFirebase(App);
