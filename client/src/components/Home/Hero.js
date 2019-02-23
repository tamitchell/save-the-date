import React from 'react';
import { Container } from 'reactstrap';

const Hero = () =>
  <Container className="hero-container" fluid={true}>
      <header>
      <h1>Save the Date!</h1>
      <h3>Aunt Dana's 55th Birthday Party</h3>
      </header>
        <img src={require("../../img/hero-img.jpg")} alt="having a good time"></img>
  </Container>

export default Hero