import React, { Component } from "react";
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
    this.state = {};
  }
  render() {
    return (
      <Container className="presite-container" fluid={true}>
        <Row>
          <Col xs={12} lg={12}>
            <Form>
                <h1>Welcome</h1>
                <h5>A password is needed to access the rest of this site.</h5>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
