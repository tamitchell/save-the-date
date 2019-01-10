import React from "react";
import { Link } from "react-router-dom";
import * as routes from "./constants/Routes"
import { Container } from "reactstrap";
import { AuthUserContext, withAuthorization } from './Session';

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (

  <Container className="accnt-container">
    <h2>Account</h2>
    <div>
      <p>Name, here is your current status regarding the 2019 New Orleans Trip:</p>
      <p></p>
      <p>If you would like to change your decision, visit this <Link to={routes.RSVP}>link</Link>.</p>
    </div>
    <div>
      <p>You can make account changes with the following links below:
        <br/>
        <Link to={routes.PASSWORD_FORGET}>Password Forget</Link> | <Link to={routes.PASSWORD_UPDATE}>Password Reset</Link> | <Link to={routes.DELETE_ACCT}>Delete Your Account</Link>
      </p>
    </div>
  </Container>

    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(Account);
