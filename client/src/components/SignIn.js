import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../firebase/context";
import { PulseLoader } from "react-spinners";
import * as routes from "./constants/Routes";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignInPage = () => (
  <div className="acct-form-container">
    <h2>Sign In</h2>
    <SignInForm />
    <SignUpLink />
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
  email: "",
  passwordOne: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      ...INITIAL_STATE
    };
  }
  onSubmit = event => {
    const { email, passwordOne } = this.state;
    const { history } = this.props;
    
    this.setState({ loading: true }, async () => {
      this.props.firebase
      .doSignInWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ 
          modal: false,
          ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
      
      setTimeout(this.setState({ loading: false }), 1000)
    });
    event.preventDefault();
  };

  render() {
    const {
      email,
      passwordOne,
      error
    } = this.state;

    const isInvalid =
      passwordOne === "" ||
      email === ""

    return (
            <Form onSubmit={this.onSubmit}>
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
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInForm;

export { SignInPage, SignUpLink };
