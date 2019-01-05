import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";

export class RSVPDecision extends Component {

    saveAndContine = (e) => {
        e.preventDefault();
        this.props.nextStep(e)
    }

  render() {
      const { values } = this.props
    return (
      <fieldset>
        <FormGroup>
            <h5>Hi {values.fullName}, are you attending this trip?</h5>
          <div className="form-group-wrapper">

          <FormGroup>
            <input
              type="radio"
              onChange={this.props.handleChange('isGoing')}
              checked={this.props.handleRadioChange}
              className="form-radio"
            />
            <label htmlFor="radio-one">I'm going</label>
          </FormGroup>
          <FormGroup>
            <input
              type="radio"
              onChange={this.props.handleChange('isGoing')}
              checked={this.props.handleRadioChange}
              className="form-radio"
            />
            <label htmlFor="radio-one">I'm Not Going</label>
          </FormGroup>
          </div>
          <Button onClick={this.props.prevStep} className="right">
            Previous
          </Button>
          <Button onClick={this.saveAndContine} className="right">
            Submit
          </Button>
        </FormGroup>
      </fieldset>
    );
  }
}

export default RSVPDecision;