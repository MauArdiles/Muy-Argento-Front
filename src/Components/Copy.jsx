import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Copy = () => {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#3CB4F9",
        border: "1px solid white",
        borderColor: "white",
      }}
    >
      <Row xs={1} md={2}>
        <Col
          style={{
            width: "100%",
            textAlign: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          Desarrollado por MA Servicios Informáticos © Todos los Derechos
          Reservados
        </Col>
      </Row>
    </Container>
  );
};
