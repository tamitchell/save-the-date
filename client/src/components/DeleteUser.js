import React, { Component } from "react";
import { Button } from 'reactstrap';
import axios from "axios";



export class DeleteUser extends Component {
    constructor() {
        super(); 
        this.state = {
            isDeleted: false
        }
    }


    deleteUserAccount = (event) => {
        const userDeletedMsg = `${this.props.userName} has been removed successfully.`
        event.preventDefault();
        axios.delete(process.env.REACT_APP_DELETE_GUEST + this.props.userID).then(response => {
            console.log(response);
            this.props.setNotification(userDeletedMsg);
            this.setState({isDeleted: true})
        })
    }

    componentDidMount() {
        console.log(this.props)
        this.props.setNotification(this.props.deleteMsg);
    }

    render() {
        return <Button color="danger" disabled={this.state.isDeleted} onClick={(event) => this.deleteUserAccount(event, this.props.userID)}>Yes, I want to remove this person from the list</Button>
    }
}
