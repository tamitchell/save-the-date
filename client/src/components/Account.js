import React from "react";
import { Link } from "react-router-dom";
import * as routes from "./constants/Routes"
import firebase from "firebase";
import { Container } from "reactstrap";
import { AuthUserContext, withAuthorization } from './Session';




class Account extends React.Component {
  constructor() {
    super()
    this.state = {
      isGoing: "",
      fullName: ""
    }
  }
  getUserInfo = () => {
  
  let userObj = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .database()
            .ref(`users/${user.uid}`)
            .once("value", snap => this.setState({ ...snap.val() }));
        }
      });
      return userObj
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render(){
    const {fullName, isGoing} = this.state
    console.log(isGoing.isGroup)
    return(

    <AuthUserContext.Consumer>
      {authUser => (
  
    <Container className="acct-form-container">
      <h2>Account</h2>
      <div>
        <p>{fullName}, here is your current status regarding the 2019 New Orleans Trip:</p>
        <p className={isGoing.isGoingGroup === "true" ? "GOING":"NOT-GOING"}>{isGoing.isGoingGroup === "true" ? "GOING":"NOT GOING"}</p>
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
    )
  }
}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(Account);
