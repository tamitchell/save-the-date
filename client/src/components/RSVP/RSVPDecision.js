import React, { Component } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import Switch from "react-switch"

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
    
            <Switch
              onChange={this.props.handleToggleChange}
              checked={values.isGoing}
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    height: "100%",
                    width:"150px",
                    fontSize: 15,
                    color: "white",
                    marginLeft: -50
                      }}
                >
                  I'm Not Going
                </div>
              }
              checkedIcon={<div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width:"150px",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 10
                }}
              >
                I'm Going
              </div>
            }
              width={300}
              height={50}
              aria-label="Toggle for whether or not you are attending the party. The default is automatically set to 'not going'."
              />
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
