import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default function SearchBar() {
  //   const sortByOptions = {
  //     "Best Match": "best_match",
  //     "Highest Rated": "rating",
  //     "Most Reviewed": "review_count",
  //   };

  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <Col md={6}>
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Search Businesses"
              aria-describedby="basic-addon1"
            />
            <Form.Control
              placeholder="Where?"
              aria-describedby="basic-addon2"
            />

            <Button variant="dark">Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
