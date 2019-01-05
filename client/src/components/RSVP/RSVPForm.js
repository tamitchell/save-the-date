import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import RSVPDecision from "./RSVPDecision";

class RSVPForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: "",
      email: "",
      isGoing: false,
      phoneNumber: ""
    };
  }

  handleRadioChange = event => {
    event.preventDefault();
    this.setState({isGoing: !this.state.isGoing })
    console.log(this.state.isGoing)
  };

  handleChange = input => event => {
    event.preventDefault();
    this.setState({ [input]: event.target.value });
    console.log(this.state);
  };

  nextStep = event => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
    event.preventDefault();
  };

  prevStep = event => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
    event.preventDefault();
  };
  render() {
    const { step } = this.state;
    const { fullName, email, phoneNumber } = this.state;
    const values = { fullName, email, phoneNumber };
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <RSVPDecision
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleRadioChange={this.handleRadioChange}
            values={values}
          />
        );
      default:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default RSVPForm;
