import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import logo from "../assets/Logo Negra.jpeg";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src={logo}
              alt="Logo"
              roundedCircle
              width={150}
              height={150}
            />
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Tienda</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
