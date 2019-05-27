import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase/context";
import { FormStatus } from './FormStatus'
import RSVPForm from './RSVPForm'
import  withAuthorization from "../Session/withAuthorization";

class RSVPParentContainer extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      input: {},
      status: false,
      formSubmitted: false
    };
  }

  changeStatus = (event) => {
    event.preventDefault();
    this.setState({
      status: true,
      formSubmitted: true
    })
  }

  render() {
    const {status, formSubmitted} = this.state
    const endDate = "June 5th 2019 at 12:00PM (EST)"
    return (
        <div className="acct-form-container">
          {formSubmitted === true ? (
            <FormStatus status={status} />
          ) : (
            <RSVP
              changeStatus={this.changeStatus}
            />
          )}
          <span className="attention">
            <p>ATTENTION:</p>
            <p>The ability to change details related to RSVP will be disabled on {endDate}. Please ensure you have made your final decision before then.</p>
          </span>

        </div>
      );
  }
}

const RSVP = compose(
  withRouter,
  withFirebase
)(RSVPForm);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(RSVPParentContainer)