/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../../Hooks/useCart";

export const ProductCard = ({ product }) => {
  const cart = useCart();
  const handleClick = () => {
    return cart.addToCart(product);
  };
  return (
    <Card
      style={{
        width: "18rem",
        height: "35rem",
      }}
      border="primary"
    >
      {product.Image && <img src={product.Image} alt={product.Name} />}
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{product.Name}</Card.Title>
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>
            {product.Description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>{product.Price}</Card.Text>
        </Card.Body>
      </Card.Body>
      <Card.Body>
        <div className="d-grid gap-1">
          <Button variant="primary" size="sm" onClick={handleClick}>
            Agregar al Carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
