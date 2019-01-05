import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase/context";
import RSVPForm from './RSVPForm'
import { FormStatus } from './FormStatus'

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
    let status = this.state.status;
    let formSubmitted = this.state.formSubmitted;
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

export default RSVPParentContainer