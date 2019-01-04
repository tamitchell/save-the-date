import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import SignUpForm from "../SignUp/SignUp";
import SignIn from "../SignIn";

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
          <Button>
            <SignIn />
          </Button>
          <Button>
            <SignUpForm />
          </Button>
        </div>
      </div>
    );
  }
}

export default TripDetails;
