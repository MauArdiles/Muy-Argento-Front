import { CartProduct } from "./CartProduct";
import { useCart } from "../../Hooks/useCart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  const { cart } = useCart();
  const clearCart = useCart();
  const getTotalCost = useCart();

  console.log(cart);

  const handleClearCart = () => {
    clearCart();
  };

  const productsCount = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Container fluid="md">
        {cart.map((prodItem, idx) => (
          <Row key={idx} className="g-4 m-2">
            <CartProduct product={prodItem} />
          </Row>
        ))}
      </Container>
      <Card
        border="primary"
        style={{
          width: "auto",
          height: "15rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "10px",
        }}
      >
        <Card.Body>
          <Card.Title>Detalle de la Compra </Card.Title>
          <Card.Text>Productos {productsCount}</Card.Text>
          <Card.Subtitle>
            Total de la Compra: U$D {getTotalCost().toFixed(2)}
          </Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Button variant="danger" onClick={handleClearCart}>
            Limpiar Carrito
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
