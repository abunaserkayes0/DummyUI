import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "./ProductDetails.css";
const ProductDetails = ({ product }) => {
  console.log(product);
  const { description, thumbnail, price, title } = product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Card.Img src={thumbnail} className="w-50" alt="" />
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <h5 className="ps-3">${price}</h5>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductDetails;
