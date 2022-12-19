import React from "react";
import { Row } from "react-bootstrap";

// Transational history will start in blank asking for a new transaction

//Once transaction found in DB, loop over and show the latest first

function TransactionHistory() {
  return (
    <Row>
      <h5>Please make a transaction to see the history</h5>
    </Row>
  );
}

export default TransactionHistory;
