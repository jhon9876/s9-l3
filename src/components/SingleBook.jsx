import { Button, Card, Col, Container, Row } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Container fluid>
      <Row className="">
        <Col className="d-flex justify-content-center" xs={12} md={12} lg={12}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.bookInformation.img} />
            <Card.Body>
              <Card.Title>{props.bookInformation.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
