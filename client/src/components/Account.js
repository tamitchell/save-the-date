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
      fullName: "",
      guests: 0
    }
  }
  getUserInfo = () => {
  let userObj = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .database()
            .ref(`users/${user.uid}`)
            .once("value", snap => {
              this.setState({ ...snap.val() })
            })
        }
      });
      return userObj
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render(){
    const {fullName, isGoing, guests} = this.state
    return(

    <AuthUserContext.Consumer>
      {authUser => (
  
    <Container className="acct-form-container">
      <h2>Account</h2>
      <div>
        <p>{fullName}, here is your current status regarding the birthday party:</p>
        <p className={isGoing.isGoingGroup === "true" ? "GOING":"NOT-GOING"}>{isGoing.isGoingGroup === "true" ? "GOING":"NOT GOING"}</p>
        <p>with {guests} {guests === 1 ? "guest" : "guests"} coming.</p>
        <p>If you would like to change your decision, visit this <Link to={routes.RSVP}>link</Link>.</p>
      </div>
      <div>
        <p>If you would like to delete your account or reset your password, please contact the <a href="mailto:tamitchell14@gmail.com">system administrator</a></p>
      </div>
    </Container>
  
      )}
    </AuthUserContext.Consumer>
    )
  }
}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(Account);
