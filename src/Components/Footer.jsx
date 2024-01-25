import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Logo Negra.jpeg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container style={{ width: "100%", backgroundColor: "#3CB4F9" }}>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Logo" roundedCircle width={150} height={150} />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-start">
          <Row xs={1} md={3}>
            <Col>
              <Navbar.Text style={{ color: "whitesmoke" }}>
                Muy Argento
              </Navbar.Text>
            </Col>
            <Col>
              <Navbar.Text style={{ color: "whitesmoke" }}>
                Garantía de Envíos
              </Navbar.Text>
            </Col>
            <Col>
              <Navbar.Text style={{ color: "whitesmoke" }}>
                Medios de Pago
              </Navbar.Text>
            </Col>
            <Col>
              <Navbar.Text style={{ color: "whitesmoke" }}>
                Consultas e Info
              </Navbar.Text>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
