import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import RSVPDecision from "./RSVPDecision";
import firebase from "firebase";

class RSVPForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: "",
      email: "",
      isGoing: {},
      guests: 0,
      phoneNumber: ""
    };
  }

  getUserInfo = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref(`users/${user.uid}`)
          .once("value", snap => this.setState({ ...snap.val() }));
      }
    });
  };

  componentDidMount() {
    this.getUserInfo();
  }

  handleRadioChange = event => {
    event.preventDefault();
    const { isGoing } = this.state;
    isGoing[event.target.name] = event.target.value;
    this.setState({ isGoing: isGoing });
  };

  handleChange = input => event => {
    event.preventDefault();
    this.setState({ [input]: event.target.value });
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

  onSubmit = event => {
    event.preventDefault();
    const { fullName, email, phoneNumber, isGoing: isGoingGroup, guests } = this.state;
    const input = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      isGoing: isGoingGroup,
      guests: guests
    };
    firebase.auth().onAuthStateChanged(user => {
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .update(input);
    });
    this.props.changeStatus(event);
  };

  render() {
    const { step } = this.state;
    const { fullName, email, phoneNumber, guests } = this.state;
    const values = { fullName, email, phoneNumber, guests };
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
            onSubmit={this.onSubmit}
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
