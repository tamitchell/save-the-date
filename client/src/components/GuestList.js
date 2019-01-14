import React from "react";

import { Table } from "reactstrap";

const GuestList = (props) =>  {
    console.log(props.guests)
    
    let guestList = props.guests.map((user, i) => {
        return <tr key={i}>
        {i}
        <td>{user.fullName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.isGoing.isGoingGroup === "true" ?  "Yes" : "No" }</td>
        </tr>
    })
      return (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Guest Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>RSVP</th>
            </tr>
          </thead>
          <tbody>
           {guestList}
          </tbody>
        </Table>
      );
    }

export default GuestList