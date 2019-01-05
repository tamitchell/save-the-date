import React, { Component } from "react";
import RSVPForm from './RSVPForm'
import { FormStatus } from './FormStatus'

class RSVPParentContainer extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      input: {},
      status: null,
      formSubmitted: null
    };
  }

  render() {
    let status = this.state.status;
    let formSubmitted = this.state.formSubmitted;
    return (
        <div>
          {formSubmitted === true ? (
            <FormStatus status={status} />
          ) : (
            <RSVPForm
              formSubmitted={this.state.formSubmitted}
              onSubmit={event => this.onSubmit(event)}
            />
          )}
        </div>
      );
  }
}

export default RSVPParentContainer