import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarApp({ cartCount }) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Luna & Granos Café ☕</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/menu">Carta</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Carrito {cartCount > 0 && <Badge bg="warning">{cartCount}</Badge>}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}