import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../componentes/productCard";
import { PRODUCTS } from "../data/products";

export default function Menu({ onAdd }) {
  return (
    <Container>
      <h2 className="mb-4 text-center">Nuestra Carta</h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {PRODUCTS.map((p) => (
          <Col key={p.id}>
            <ProductCard product={p} onAdd={onAdd} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}