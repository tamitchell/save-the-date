import React, { Component } from "react";
import Home from "./Home/Home";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default class PreSite extends Component {
  constructor() {
    super();
    this.state = {
      validated: false,
      input: {}
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { input } = this.state;
    input[e.target.name] = e.target.value;
    this.setState({ input: input });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('click')
    let { password } = this.state
    if (password === "banQuet3*9") {
      console.log("validated")
      this.setState({
          validated: true
      })
    }
}

  render() {
    const { validated } = this.state
    return <h1>Hey, I'm landing!</h1>

  }
}