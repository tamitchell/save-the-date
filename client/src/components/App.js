import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
import {SignInPage} from './SignIn';
import { SignUpPage } from './SignUp/SignUp';
import PasswordResetPage from './PasswordReset';
import HomePage from './Home/Home';
import AccountPage from './Account';
import Navigation from './Navigation';
import RSVPFORM from "./RSVP/RSVPParentContainer";
import Footer from './Footer';
import Admin from "./Admin";
import * as routes from './constants/Routes';
import NotFound from './404Error'
import '../sass/App.scss'
import { withAuthentication } from './Session/withAuthentication';

const App = () => (
        <Fragment>
          <Navigation />
          <Switch>
          <Route
          exact path={routes.HOME}
          component={HomePage}
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
          component={PasswordResetPage}
        />
        <Route path={routes.ADMIN} component={Admin} />
        <Route
          path={routes.ACCOUNT}
          component={AccountPage}
        />
        <Route component={NotFound}/>
          </Switch>
        <Footer />
        </Fragment>
      );
      
export default withAuthentication(App);
