import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Form } from "reactstrap";
import { withFirebase } from "../firebase/index";
import * as ROUTES from "./constants/Routes";
import { FormStatus } from "./RSVP/FormStatus";
import firebase from "firebase"
import CustomizedModal from "./CustomizedModal";

const PasswordResetPage = () => (
  <div className="acct-form-container">
    <h2>Reset Your Password</h2>
    <PasswordResetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class PasswordResetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { status: false, formSubmitted: false, ...INITIAL_STATE };
  }

  componentDidMount() {
    const email = firebase.auth().currentUser.email;
  }


  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ status: true, formSubmitted: true,...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error, status, formSubmitted } = this.state;

    const isInvalid = email === "";

    return (
      <div>
      {formSubmitted === true ? (
        <FormStatus status={status} />
      ) : (
      <Form className="acct-form-container" onSubmit={this.onSubmit}>
        <p>In order to reset your password, we need to verify your email.</p>
        <Input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
          required
        />
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </Form>)}
      </div>
    );
  }
}

const PasswordResetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordResetPage;

const PasswordResetForm = withFirebase(PasswordResetFormBase);

export { PasswordResetForm, PasswordResetLink };
