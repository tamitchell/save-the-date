import React from "react";
import { FaTimes } from "react-icons/fa";
import { Table } from "reactstrap";
import CustomizedModal from "../components/CustomizedModal";
import { DeleteUser } from "./DeleteUser";



const GuestList = (props) =>  {
  let guestList = props.guests.map((user, i) => {
    const deleteMsg = `Are you sure you want to remove ${user.fullName} from the list? This action cannot be undone.`
    const confirmDelete = <CustomizedModal buttonLabel={<FaTimes />} modalBody={props.notification} modalFooterAction={<DeleteUser userName={user.fullName} notification={props.notification} deleteMsg={deleteMsg} setNotification={props.setNotification} userID={user.uid}/>}/>
        return <tr key={i}>
        <td>{i+1}</td>
        <td>{user.fullName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        {user.isGoing === null || user.isGoing === undefined ? <td className="isGoing-Unknown">Not Determined</td> : <td className={"isGoing-" +  (user.isGoing === true ?  "Yes" : "No") }> {user.isGoing === true ?  "Yes" : "No" }</td>}
        <td>{user.guests === null || user.guests === undefined ? "Not Set" : user.guests}</td>
        <td>{confirmDelete}</td>
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
              <th>No. of Guests</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
           {guestList}
          </tbody>
        </Table>
      );
    }

export default GuestList