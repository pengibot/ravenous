import { Col, Container, Row } from "react-bootstrap";
import Business from "./Business";

export function BusinessList() {
  const rows = new Array(4).fill(null);

  return (
    <Container>
      {rows.map((_, index) => (
        <Row key={index}>
          <Col>
            <Business />
          </Col>
        </Row>
      ))}
    </Container>
  );
}
