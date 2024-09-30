import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Modal.scss";

export default function Modal({ isOpen, onClose, product }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h3>Product Added to Cart</h3>
        <div className="modal-product-info">
          <img
            src={product.image}
            alt={product.title}
            className="modal-product-image"
          />
          <div className="modal-product-details">
            <h4>{product.title}</h4>
            <p>Price: £{product.price.toFixed(2)}</p>
            <p>Quantity: 1</p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={() => navigate("/cart")}>
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
