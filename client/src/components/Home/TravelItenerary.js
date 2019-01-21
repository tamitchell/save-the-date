import React from "react";
import { Table } from "reactstrap";

const TravelItenerary = () => (
  <Table hover responsive>
    <thead>
      <tr>
        <td colSpan="2">
        <h2>New Orleans Aug 2019 Party Details Overview</h2>
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
          Pastel colors required. (Pastel shirts for men are okay, black pants
          allowed)
        </td>
      </tr>
      <tr>
        <th scope="row">Time</th>
        <td>
          6:30PM to 11:00PM
        </td>
      </tr>
      <tr>
        <th scope="row"> Date & Location</th>
        <td>
          Lesner Inn <br />
          3319 Shore Dr. <br />
          Virginia Beach VA 23451
        </td>
      </tr>
    </tbody>
  </Table>
);

export default TravelItenerary;
