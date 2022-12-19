import Head from "next/head";
import Footer from "../components/Footer";
import NewUser from "../components/screen/NewUser";
import MakeTransaction from "../components/screen/MakeTransaction";
import TransactionHistory from "../components/screen/TransactionHistory";
import Nav from "../components/screen/Nav";

import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Boilerplate React</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Container fluid>
        <Nav />
        <Container className="text-center">
          <NewUser />
          <Row className="mt-4">
            <Col lg={6}>
              <MakeTransaction className="text-center" />
            </Col>
            <Col lg={6}>
              <TransactionHistory className="text-center" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
