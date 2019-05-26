import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase/index";
import { PulseLoader } from "react-spinners";
import * as routes from "../constants/Routes";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUpPage = () => (
  <div className="acct-form-container">
    <h2>Create an Account</h2>
    <SignUpForm />
  </div>
);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  fullName: "",
  email: "",
  passwordOne: "",
  passwordConfirmation: "",
  isAdmin: false,
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, fullName, passwordOne, isAdmin } = this.state;
     console.log(this.state);
    const roles = [];

    if (isAdmin) {
      roles.push(roles.ADMIN);
    }


    this.setState({ loading: true }, () => {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase.user(authUser.user.uid).set({
            fullName,
            email,
            roles
          });
        })
        .then(() => {
          return this.props.firebase.doSendEmailVerification();
        })
        .then(authUser => {
          this.setState({
            modal: false,
            ...INITIAL_STATE
          });
          this.props.history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
        });
    });
    setTimeout(this.setState({ loading: false }), 1000);
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      fullName,
      email,
      passwordOne,
      passwordConfirmation,
      isAdmin,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordConfirmation ||
      passwordOne === "" ||
      email === "" ||
      fullName === "";

    return (
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="fullname">Full Name</Label>
            <Input
              defaultValue={fullName}
              type="text"
              onChange={event =>
                this.setState(byPropKey("fullName", event.target.value))
              }
              placeholder="Full Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              defaultValue={email}
              type="email"
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
              placeholder="Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              defaultValue={passwordOne}
              type="password"
              onChange={event =>
                this.setState(byPropKey("passwordOne", event.target.value))
              }
              placeholder="Password"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="passwordConfirmation">Password Confirmation</Label>
            <Input
              defaultValue={passwordConfirmation}
              type="password"
              onChange={event =>
                this.setState(
                  byPropKey("passwordConfirmation", event.target.value)
                )
              }
              placeholder="Password"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="isAdmin">I'm an administrator</Label>

            <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
          </FormGroup>
          {error && <p>{error.message}</p>}
          {this.state.loading === true ? (
            <PulseLoader
              sizeUnit={"px"}
              size={10}
              color={"#EF522A"}
              loading={this.state.loading}
            />
          ) : (
            <Button disabled={isInvalid} type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Fragment>
    )
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpForm;

export { SignUpPage, SignUpLink };
