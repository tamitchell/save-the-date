import React, { Component, Fragment} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";

  class CustomizedModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <Fragment>
          <Button onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.props.buttonLabel}</ModalHeader>
            <ModalBody>
                {this.props.modalBody}
            </ModalBody>
            <ModalFooter>
              {this.props.modalFooterAction}
              <Button color="secondary" onClick={this.modalToggle}>
              Cancel
            </Button>}
            </ModalFooter>
          </Modal>
        </Fragment>
      );
    }
  }
  
  export default CustomizedModal;