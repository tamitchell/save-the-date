import React, { Component } from 'react'
import { Container } from "reactstrap"
import SendInvite from "./SendInvite"

export class AdminOptionsContainer extends Component {
    render() {
        return (
            <Container style={{paddingBottom: 30}}>
                <SendInvite/>
            </Container>
        )
    }
}

export default AdminOptionsContainer
