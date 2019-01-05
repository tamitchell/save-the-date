import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import * as routes from "../constants/Routes";

const Instructions = () => (
  <Container className="instructions-container" fluid={true}>
    <img src={require("../../img/icons/mask-v2.png")} alt="Mardi gras mask" />
    <h5>
      This is an RSVP site. Please read the instructions below thoroughly.
    </h5>
    <div>
      <img
        src={require("../../img/icons/number-one-in-a-circle.png")}
        alt="Number one in a circle"
      />
      <img src={require("../../img/icons/trip-details.png")} alt="Airplane " />
      <h6>Read trip details</h6>
      <p>Login. Sign up. Read trip details. It's as simple as that!</p>
    </div>
    <div>
      <img
        src={require("../../img/icons/number-two-in-a-circle.png")}
        alt="Number two in a circle"
      />
      <img
        src={require("../../img/icons/balloon(1).png")}
        alt="Party balloon in a letter "
      />
      <h6>RSVP (or not)</h6>
      <p>
        Decide whether or not you want to be RSVP'd to the trip or not. Beware:
        if you sign in and then decide you want to un-RSVP, you will not be able
        to reserve your space again.
      </p>
    </div>
    <div>
      <img
        src={require("../../img/icons/number-three-in-a-circle.png")}
        alt="Number three in a circle"
      />
      <img
        src={require("../../img/icons/alarm.png")}
        alt="Ringing bell "
      />
      <h6>Stay updated!</h6>
      <p>
        Stay up-to-date by checking in on this site every once in a while for more trip details or event changes!
      </p>
    </div>
    <p>View all rules and regulations <Link to={routes.RULES}>here.</Link> </p>
  </Container>
);

export default Instructions;
