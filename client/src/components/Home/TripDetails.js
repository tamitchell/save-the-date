import React, { Component, Fragment } from "react";
import { Container, Button } from "reactstrap";
import SignUpForm from "../SignUp/SignUpForm";

class TripDetails extends Component {
  render() {
    return (
      <div className="trip-container">
        <Container className="bg-image" fluid={true}>
          <img src={require("../../img/band.jpg")} alt="A New Orleans band" />
        </Container>
        <div className="bg-text">
          <h1>Trip Details</h1>
          <p />
        </div>
        <div>
        <Button />
      <SignUpForm/>
        </div>
      </div>
    );
  }
}

export default TripDetails;
