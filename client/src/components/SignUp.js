import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import * as routes from "./constants/Routes";
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

//this is a shorthand version of grabbing a value onChange
//I used to write it like currentState[e.target.name] = e.target.value
//and set state that way, but I am currently experimenting with this one

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordConfirmation: '',
    error: null,
  }

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modal,
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...this.state });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
      console.log(this.state)
    const {
      username,
      email,
      passwordOne,
      passwordConfirmation,
      error
    } = this.state;
    const isInvalid = ( passwordOne !== passwordConfirmation ||
      passwordOne === "" ||
      email === "" ||
      username === "")
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Sign Up</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                defaultValue={username}
                type="text"
                onChange={event =>
                  this.setState(byPropKey("username", event.target.value))
                }
                placeholder="Username"
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
    );
  }
}

export default withRouter(SignUpForm);
