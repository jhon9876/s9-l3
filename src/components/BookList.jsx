import { Card, Col, Container, Row } from "react-bootstrap";
import SingleItem from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <SingleItem />
        </Row>
      </Container>
    );
  }
}

export default BookList;
