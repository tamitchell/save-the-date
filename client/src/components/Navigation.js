import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { AuthUserContext } from "./Session/index";
import LogOut from "./SignOut";
import * as routes from "./constants/Routes";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
  {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </AuthUserContext.Consumer>
  </div>
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
  };

  render() {
    return (
      <Navbar className="navigation" dark expand="md">
        <NavbarBrand href="/">Save the date</NavbarBrand>
        <NavbarToggler onClick={this.navToggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>Welcome</NavItem>
            <NavItem>
              <Link to={routes.HOME}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.RSVP}>RSVP</Link>
            </NavItem>
            {/* <NavItem>
              <Link to={routes.ADMIN}>Admin</Link>
            </NavItem> */}
            <NavItem>
              <Link to={routes.ACCOUNT}>Account</Link>
            </NavItem>

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
  };

  render() {
    return (
      <Navbar className="navigation" dark expand="md">
        <NavbarBrand href="/">Save the date</NavbarBrand>
        <NavbarToggler onClick={this.navToggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={routes.SIGN_IN}>Sign In</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.SIGN_UP}> Sign Up</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.HOME}>Home</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
