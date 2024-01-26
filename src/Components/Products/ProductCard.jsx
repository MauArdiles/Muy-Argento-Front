import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
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
          <Button variant="primary" size="sm">
            Agregar al Carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
ProductCard.propTypes = {
  props: PropTypes.node,
  product: PropTypes.node,
};
