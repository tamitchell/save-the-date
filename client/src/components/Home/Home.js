import React, { Fragment } from "react";
import Hero from "./Hero";
import Instructions from "./Instructions";
import FlightInfo from "./FlightInfo";
import TripDetails from "./TripDetails";

const Home = () => (
  <Fragment>
    <Hero />
    <Instructions />
    <FlightInfo />
    <TripDetails />
  </Fragment>
);

export default Home;
