import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Figure from "react-bootstrap/Figure";

import frenchFlag from "../assets/Bandera_Francia.png";
import spainFlag from "../assets/Bandera_España.png";
import eeuuFlag from "../assets/Bandera_EEUU.png";

export const Translate = () => {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#3CB4F9",
        border: "2px solid",
        borderColor: "white",
      }}
    >
      <Row xs={2} md={2}>
        <Col
          style={{
            width: "80%",
            marginTop: "1em",
            textAlign: "center",
            color: "white",
          }}
        >
          PRODUCTOS 100% ARGENTINOS PARA EL MUNDO
        </Col>
        <Col
          style={{
            marginTop: "0.5em",
            width: "20%",
            alignItems: "center",
          }}
        >
          <Nav>
            <Figure style={{ display: "flex", flexFlow: "row" }}>
              <Nav.Link href="/home">
                <Figure.Image alt="FrenchFlag" src={frenchFlag} />
              </Nav.Link>
              <Nav.Link href="/home">
                <Figure.Image alt="SpainFlag" src={spainFlag} />
              </Nav.Link>
              <Nav.Link href="/home">
                <Figure.Image alt="EeuuFlag" src={eeuuFlag} />
              </Nav.Link>
            </Figure>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};
