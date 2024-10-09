import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./modal.module.scss";

export default function Modal({ isOpen, onClose, product }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        <h3>Product Added to Cart</h3>
        <div className={styles.modalProductInfo}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.modalProductImage}
          />
          <div className={styles.modalProductDetails}>
            <h4>{product.title}</h4>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: 1</p>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.continueShoppingBtn} onClick={onClose}>
            Continue Shopping
          </button>
          <button className={styles.checkoutBtn} onClick={() => navigate("/cart")}>
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
