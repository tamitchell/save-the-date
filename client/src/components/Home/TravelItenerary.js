import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/Routes";
import { Table, Container } from "reactstrap";

const style = {
  border: "0"
}

const TravelItenerary = () => (
  <Container fluid={true}>
  <Table hover responsive>
    <thead>
      <tr>
        <td colSpan="2">
        <h2>
          Birthday Party Details</h2>
        <img src={require("../../img/sax_man.svg")} alt="Man with saxophone" />

          </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Restrictions</th>
        <td>
          Adults Only. Remember that if you have RSVP'd and then decide NOT to come
          you will not be allowed to re-register. The cut-off date for RSVP is{" "}
          <strong>June 10th, 2019.</strong>
        </td>
      </tr>
      <tr>
        <th scope="row">Dress Code</th>
        <td>
          Semi-formal <br />
          Pastel colors required. (Pastel shirts and black pants for men are okay!)
        </td>
      </tr>
      <tr>
        <th scope="row">Date & Time</th>
        <td>
          August 17th, 2019<br/>
          6:30PM to 11:00PM
        </td>
      </tr>
      <tr>
        <th scope="row">Location</th>
        <td>
          Lesner Inn <br />
          3319 Shore Dr. <br />
          Virginia Beach VA 23451
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.312109507275!2d-76.09020088510697!3d36.906801369392134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba93537c34486f%3A0x435c96224e5ca01a!2sLesner+Inn+Catering+Club!5e0!3m2!1sen!2sus!4v1548996067242" width="300" height="200" frameborder="0" title="Google Map Location for party" style={style} allowfullscreen></iframe>
        </td>
      </tr>
    </tbody>
  </Table>
  <br/>
  <br/>
  <Link to={ROUTES.RSVP}>RSVP HERE</Link>
  </Container>
);

export default TravelItenerary;
