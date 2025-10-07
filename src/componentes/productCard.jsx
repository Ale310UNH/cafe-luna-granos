import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product, onAdd }) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="mt-auto fw-bold">${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onAdd(product)}>
          Agregar al pedido
        </Button>
      </Card.Body>
    </Card>
  );
}