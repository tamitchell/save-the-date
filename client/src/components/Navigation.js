import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom';
import SignUpPage from './SignUp/SignUpPage'
import * as routes from './constants/Routes';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false

    };
  }
  navToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
        <Navbar className="navigation" dark expand="md">
          <NavbarBrand href="/">Save the date</NavbarBrand>
          <NavbarToggler onClick={this.navToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link to={routes.SIGN_IN}>
                {/* <NavLink>Sign In</NavLink> */}
                Sign In
                  </Link>
              </NavItem>
              <NavItem>
                <SignUpPage />
              </NavItem>
              <NavItem>
                  <Link to={routes.HOME}>
                {/* <NavLink>Home</NavLink> */}
                Home
                  </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to={routes.ACCOUNT}>
                  <DropdownItem>Credentials</DropdownItem>
                  </Link>
                  <Link to={routes.PASSWORD_FORGET}>
                  <DropdownItem>Password Reset</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>Delete Account</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
