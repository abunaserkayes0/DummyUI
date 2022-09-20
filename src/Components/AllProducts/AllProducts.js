import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";
const AllProducts = ({handelAddToCart}) => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((result) => setElements(result.products));
  }, []);
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {elements.map((product) => (
          <SingleProduct handelAddToCart={handelAddToCart} key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
