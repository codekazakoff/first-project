import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "../../css/navbar/navbar.css";
class NavbarHeader extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container className="container">
          <Link className="navbar-brand" to="/home">
            Movie
          </Link>
          <Nav className="mr-auto">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signIn" className="nav-link">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signUp" className="nav-link">
                  signUp
                </Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarHeader;
