import React, { Component } from "react";
import { Container } from "reactstrap";
import CustomizedModal from "../CustomizedModal";
import SignUpForm from "../SignUp/SignUp";
import SignIn from "../SignIn";
import { SignUpLink } from "../SignUp/SignUp";
import TravelIternary from "./TravelItenerary";

class TripDetails extends Component {
  render() {
    return (
      <div className="trip-container">
        <Container className={"bg-image"} fluid={true}>
          <img
            className={this.props.isAuth !== null ? null : " blur"}
            src={require("../../img/band.jpg")}
            alt="A New Orleans band"
          />
        </Container>

        {this.props.isAuth !== null ? (
          <Container className="itenerary-container">
            <TravelIternary />
            <p>On Mobile? Download the full PDF version <a href="#" download>here.</a></p>
          </Container>
        ) : (
          <div className="bg-text">
            <h1>Trip Details</h1>
            <p>You must be signed in to view trip details</p>
            <CustomizedModal buttonLabel={"Login"} modalBody={<SignIn />} modalFooterAction={<SignUpLink/>}/>
            <CustomizedModal buttonLabel={"Sign Up"} modalBody={<SignUpForm />}/>
          </div>
        )}
      </div>
    );
  }
}

export default TripDetails;
