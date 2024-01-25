import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import logo from "../assets/Logo Negra.jpeg";

import { CartWidget } from "./Cart/CartWidgwet";

export const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ border: "1px, solid, white" }}
    >
      <Container style={{ backgroundColor: "#3CB4F9" }}>
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
          <Nav
            className="me-auto"
            style={{
              width: "100%",
              fontSize: "18px",
              justifyContent: "center",
              backgroundColor: "whitesmoke",
            }}
          >
            <Nav.Link
              href="/Home"
              style={{
                border: "1px solid black",
                borderRadius: "10%",
                marginRight: "0.5em",
                padding: "1em",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Store"
              style={{
                border: "1px solid black",
                borderRadius: "10%",
                marginRight: "0.5em",
                padding: "1em",
              }}
            >
              Tienda
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              style={{
                border: "1px solid black",
                borderRadius: "10%",
                marginRight: "0.5em",
                padding: "1em",
              }}
            >
              AboutUs
            </Nav.Link>
            <Nav.Link
              href="/Contacto"
              style={{
                border: "1px solid black",
                borderRadius: "10%",
                marginRight: "2em",
                padding: "1em",
              }}
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              href="#deets"
              style={{
                marginRight: "1em",
              }}
            >
              <img src={Instagram} alt="Instagram" />
            </Nav.Link>
            <Nav.Link href="#deets">
              <img src={Facebook} alt="Facebook" />
            </Nav.Link>
            <Nav.Link
              style={{
                marginRight: "1.5em",
              }}
            >
              <img src={Twitter} alt="Twitter" />
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
