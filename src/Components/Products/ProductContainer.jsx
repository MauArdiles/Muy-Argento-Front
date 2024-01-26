import data from "../../data/data.json";
import { ProductCard } from "./ProductCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const ProductContainer = () => {
  return (
    <Row xs={1} md={4} className="g-2">
      {data.Products.map((product) => (
        <Col key={product.id} style={{ marginLeft: "1em" }}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
