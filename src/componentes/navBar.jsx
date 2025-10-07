import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarApp({ cartCount }) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Luna & Granos Café ☕</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Carta</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                Carrito {cartCount > 0 && <Badge bg="warning">{cartCount}</Badge>}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}