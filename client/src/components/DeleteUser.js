import React, { Component } from "react";
import { Button } from 'reactstrap';

export class DeleteUser extends Component {
    constructor(props) {
        super(props);
    }

    deleteUserAccount = () => {
        admin.auth().deleteUser(uid)
            .then(function () {
                console.log('Successfully deleted user');
            })
            .catch(function (error) {
                console.log('Error deleting user:', error);
            });
    }
    render() {
        return <Button color="danger" onClick={() => this.deleteUserAccount()}>Delete User</Button>
    }
}