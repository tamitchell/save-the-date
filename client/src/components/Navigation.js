import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom';
import LogOut from "./SignOut"
import * as routes from './constants/Routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
class NavigationAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  navToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
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
              Welcome
            </NavItem>
              <NavItem>
                  <Link to={routes.HOME}>
                Home
                  </Link>
              </NavItem>
              <NavItem>
                  <Link to={routes.RSVP}>
                RSVP
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
              <NavItem>
                  <LogOut />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

class NavigationNonAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  navToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
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
                Sign In
                  </Link>
              </NavItem>
              <NavItem>
              <Link to={routes.SIGN_UP}> Sign Up</Link>
              </NavItem>
              <NavItem>
                  <Link to={routes.HOME}>
                Home
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Navigation