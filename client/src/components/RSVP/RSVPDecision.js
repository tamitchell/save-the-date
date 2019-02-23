import React, { Component } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

export class RSVPDecision extends Component {
  saveAndContine = e => {
    e.preventDefault();
    this.props.nextStep(e);
  };

  render() {
    const { values } = this.props;
    return (
      <FormGroup className="label-display">
        <h5>Hi {values.fullName}, are you attending this party?</h5>

        <FormGroup>
          <Label htmlFor="radio-one">
            I'm going
            <Input
              type="radio"
              onChange={this.props.handleRadioChange}
              checked={values.isGoing}
              name="isGoingGroup"
              className="form-radio"
              value={true}
            />
          </Label>
          <Label htmlFor="radio-one">
            I'm Not Going
            <Input
              type="radio"
              onChange={this.props.handleRadioChange}
              checked={values.isGoing}
              name="isGoingGroup"
              className="form-radio"
              value={false}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="guests">Number of guests (0 - 2) </Label>
          <Input
            type="number"
            onChange={this.props.handleChange("guests")}
            defaultValue={values.guests}
            min="0"
            max="2"
            name="guests"
          />
        </FormGroup>
        <Button onClick={this.props.prevStep} className="right">
          Previous
        </Button>
        <Button onClick={this.props.onSubmit} type="submit" className="right">
          Submit
        </Button>
      </FormGroup>
    );
  }
}

export default RSVPDecision;
