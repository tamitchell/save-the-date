import React, { Fragment } from "react";
import Hero from "./Hero";
import Instructions from "./Instructions";
import FlightInfo from "./FlightInfo";
import TripDetails from "./TripDetails";

const Home = (props) => (
  <Fragment>
    <Hero />
    <Instructions />
    <FlightInfo />
    <TripDetails isAuth={props.isAuth} />
  </Fragment>
);

export default Home;
