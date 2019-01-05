import React, { Component } from "react";
import { withFirebase } from "../firebase/index";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.toggle}>Log Out</div>
        <Modal
          className="logout"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalBody>Are you sure you want to log out?</ModalBody>
          <ModalFooter>
            <Button type="button" onClick={this.props.firebase.doSignOut}>
              Yes
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withFirebase(SignOut);
