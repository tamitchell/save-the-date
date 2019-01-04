import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
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
      ...INITIAL_STATE
    };
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    const { history } = this.props;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        setTimeout(history.push(routes.HOME), 1000);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    console.log(this.props);
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
        <Button onClick={this.modalToggle}>Sign Up</Button>
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
              <Button disabled={isInvalid} type="submit">
                Submit
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
            <p>
              Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
            </p>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default SignUpFormBase;
