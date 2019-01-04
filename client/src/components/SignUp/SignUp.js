import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase/context";
import { PulseLoader } from "react-spinners";
import * as routes from "../constants/Routes";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
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
  username: "",
  email: "",
  passwordOne: "",
  passwordConfirmation: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loading: false,
      ...INITIAL_STATE
    };
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, passwordOne } = this.state;

    const { history } = this.props;

    this.setState({ loading: true }, async () => {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
        });

      setTimeout(this.setState({ loading: false }), 1000)
    });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordConfirmation,
      error,
      modal
    } = this.state;

    const isInvalid =
      passwordOne !== passwordConfirmation ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <Fragment>
        <div onClick={this.modalToggle}>Sign Up</div>
        <Modal isOpen={modal} toggle={this.modalToggle}>
          <ModalHeader toggle={this.modalToggle}>Sign Up</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="fullname">Full Name</Label>
                <Input
                  defaultValue={username}
                  type="text"
                  onChange={event =>
                    this.setState(byPropKey("username", event.target.value))
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
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.modalToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpForm;

export { SignUpPage, SignUpLink };
