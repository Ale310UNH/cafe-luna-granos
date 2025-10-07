import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="text-center">
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h1 className="fw-bold">Luna & Granos Café</h1>
          <p>Disfrutá el mejor café artesanal y pastelería casera en un ambiente cálido.</p>
          <Link to="/menu">
            <Button variant="warning" className="me-2">Ver Carta</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline-dark">Reservar</Button>
          </Link>
        </Col>
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Café"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}
