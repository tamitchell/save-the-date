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
    return (
        <div>
          {formSubmitted === true ? (
            <FormStatus status={status} />
          ) : (
            <RSVP
              changeStatus={this.changeStatus}
            />
          )}
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