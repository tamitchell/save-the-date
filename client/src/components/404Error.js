import React, { Component } from "react";
import {Link} from "react-router-dom";
import * as routes from "./constants/Routes"
import {Container} from "reactstrap"

export default class NotFound extends Component {

  render() {
    return <Container className="error-container">
    
      <h2>Uh-oh...</h2>
      <p>Looks like you've stumbled upon a page that doesn't exist, <Link to={routes.HOME}>try again</Link> yeah?</p>
      <img src={require("../img/404@4x.png")} alt="404 error" />
      </Container>

  }
}