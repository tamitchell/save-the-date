import React from "react";
import { Container } from "reactstrap";

const FlightInfo = () => (
    <Container className="flightinfo-container" fluid={true}>
        <img src={require("../../img/avion.svg")} alt="Travel avion" />
        <h4>Trip Start</h4>
        <h2>Aug 18th - 21st 2019</h2>
        <h4>Flight Details Coming Soon</h4>
    </Container>
)

export default FlightInfo