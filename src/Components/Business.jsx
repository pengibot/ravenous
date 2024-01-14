import { Container, Form, Image, Row } from "react-bootstrap";
import "./Business.scss";

const business_data = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian, Pizza",
  rating: 4.5,
  reviewCount: 90,
};

export default function Business() {
  return (
    <>
      <Container>
        <Row xs={6} md={4}>
          <Image src={business_data.imageSrc} fluid />
        </Row>
        <Row>
          <Form.Label>{business_data.name}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.address}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.city}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.state}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.zipCode}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.category}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.rating}</Form.Label>
        </Row>
        <Row>
          <Form.Label>{business_data.reviewCount}</Form.Label>
        </Row>
      </Container>
    </>
  );
}
