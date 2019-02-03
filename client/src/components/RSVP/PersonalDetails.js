import React, { Component } from "react";
import {
  Button,
  Input,
} from "reactstrap";
export class PersonalDetails extends Component {

    saveAndContine = (e) => {
        e.preventDefault();
        this.props.nextStep(e)
    }

  render() {
      let { values } = this.props
    return (
        <div>
          <h4>Information Verification</h4>
          <h5>First things first, is this information correct? If not, please feel free to change it.</h5>
          <Input onChange={this.props.handleChange('fullName')} type="text" defaultValue={values.fullName} placeholder="Full Name" />
          <Input onChange={this.props.handleChange('email')} type="email" defaultValue={values.email} placeholder="Email" />
          <Input onChange={this.props.handleChange('phoneNumber')} type="tel" defaultValue={values.phoneNumber} placeholder="Phone Number" />
          <Button onClick={this.saveAndContine} className="right">Save and Contine</Button>
        </div>
    );
  }
}

export default PersonalDetails;