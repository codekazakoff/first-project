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
          <Link className="navbar-brand" to="/">
            Movie
          </Link>
          <Nav className="mr-auto">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signUp" className="nav-link">
                  signUp
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/api" className="nav-link">
                  Api
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/oneForm" className="nav-link">
                OneForm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/joiBrowser" className="nav-link">
                JoiBrowser
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
