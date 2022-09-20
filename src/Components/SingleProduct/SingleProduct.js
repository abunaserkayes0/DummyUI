import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./SingleProduct.css";
const SingleProduct = ({ product, handelAddToCart }) => {
  const { description, thumbnail, price } = product;
  return (
    <Col data-aos="zoom-in-up">
      <Card>
        <Card.Img height="200" variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-evenly align-items-center py-3">
          <Button onClick={handelAddToCart}>Add To Cart</Button>
          <ProductDetails product={product} />
        </div>
      </Card>
    </Col>
  );
};

export default SingleProduct;
