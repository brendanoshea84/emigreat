import React, { useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";

// Notes
// Add a new user to the site
// New user starts with amount
// New unquic id

function NewUser() {
  console.log("11");
  const [amount, setamount] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/newUser/",
    })
      .then((response) => {
        console.log("18");
        const data = response.data;
        setamount(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("24");
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row className="justify-content-center">
          <h4 className="text-center"> Create a New User with an ID</h4>
        </Row>
        <Row className="justify-content-center">
          <p className="text-center muted">Please create more than two users</p>
        </Row>
        <Form.Label column sm={2}>
          Amount:
        </Form.Label>
        <Row className="justify-content-center">
          <Col sm={10}>
            <Form.Control
              type="text"
              id="startingAmount"
              name="startingAmount"
              value={startingAmount}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="How much do you want to start in their Account?"
              className="text-center"
            />
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Create New User
        </Button>
      </Form>
    </Container>
  );
}

export default NewUser;
