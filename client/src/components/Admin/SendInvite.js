import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap"
import CustomizedModal from "../CustomizedModal";
import { PulseLoader } from "react-spinners";
import axios from "axios"

const config = {
  headers: {'Content-type': 'application/json'}
}
const INITIAL_STATE = {
    fullName: "",
    email: "",
    emailConfirmation: "",
    error: ""
  };

  const byPropKey = (propertyName, value) => () => ({

    [propertyName]: value,
  });

export function EmailWasSent() {
    return <div>Message was sent.</div>
}

export class InviteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          wasSent: false,
          ...INITIAL_STATE
        };
      }

  onSubmit = (event) => {
    this.setState({loading: true})
    event.preventDefault();
    let data = { email: this.state.email, displayName: this.state.fullName }

    axios.post(process.env.REACT_APP_SEND_INVITE, data, config)
    .then(response => {
      this.setState({loading:false, wasSent: true})
    }).catch(error => {
      this.setState(byPropKey("error", error), {loading:false});
      console.log(error);
    })
  }
    
    render() {
        const {
            fullName,
            email,
            emailConfirmation,
            error, wasSent
        } = this.state;
        const isInvalid =
            email !== emailConfirmation ||
            email === "" ||
            fullName === "";
        return (
            <Container style={{textAlign:"left"}}>
            {wasSent ? <EmailWasSent /> : <Form onSubmit={this.onSubmit}>
            Please enter the full name of the guest and email you wish to submit the invite to.
                 <FormGroup>
                <Label for="fullname">Full Name</Label>
                <Input
                  defaultValue={fullName}
                  type="text"
                  onChange={event =>
                    this.setState(byPropKey("fullName", event.target.value))
                  }
                  placeholder="Full Name"
                  name="displayName"
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
                  name="email"
                  required
                />
              </FormGroup>
              <FormGroup>
                  <Label for="email">Confirm Email</Label>
                <Input
                  defaultValue={emailConfirmation}
                  type="email"
                  onChange={event =>
                    this.setState(byPropKey("emailConfirmation", event.target.value))
                  }
                  placeholder="Confirm email"
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
            </Form>}
            </Container>
        )
    }
}

export default function SendInvite() {
    return (
        <CustomizedModal buttonLabel={"Send A Party Invite"} modalBody={<InviteForm />} modalFooterAction={""}/>
    )
}
