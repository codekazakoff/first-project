import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox" className="mt-2">
                <Form.Check
                  className="checkbox"
                  type="checkbox"
                  label="Check me out"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-2 float-right"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
