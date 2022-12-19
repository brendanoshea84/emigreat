import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import axios from "axios";

// Notes
// Current user Id is selected from NewUser.js
// A drop down of "friends" on account Id
// User types amount and amount should never be neg
// all valiaded
// if success form is empty and transaction history is updated

const MakeTransaction = () => {
  const [clientId, setClientId] = useState();

  // axios({
  //   method: "GET",
  //   url: "http://127.0.0.1:8000/transaction",
  // })
  //   .then((response) => {
  //     const data = response.data;
  //     setClientId(data);
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       console.log(error.response);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  //   });

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="fromId">
        <Form.Label column sm={2}>
          From:{" "}
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="toId">
        <Form.Label column sm={2}>
          To:{" "}
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" data-type="account-id" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="amount">
        <Form.Label column sm={2}>
          Amount
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" data-type="amount" />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" data-type="transaction-submit">
        Submit Payment
      </Button>
    </Form>
  );
};

export default MakeTransaction;
