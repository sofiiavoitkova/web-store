import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./cart.module.scss";
import visaIcon from "../../assets/visa.svg";
import mastercardIcon from "../../assets/mastercard.svg";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, validateCart } = useCart();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleClearAndValidate = () => {
    clearCart();
    validateCart();
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsSection}>
        <h2>My Bag</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.cartItems}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cartItemImage}
                  />
                  <div className={styles.cartItemDetails}>
                    <h3>{item.title}</h3>
                    <p>£{item.price.toFixed(2)}</p>
                    <div className={styles.quantitySelector}>
                      <label htmlFor={`quantity-${item.id}`}>Qty: </label>
                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className={styles.cartTotalSection}>
        <h2>Total</h2>
        <p>Sub-total: £{getTotalPrice()}</p>
        <p>
          Delivery: <span>Standard Delivery (Free)</span>
        </p>
        <button className={styles.checkoutBtn}>Checkout</button>

        <button
          onClick={handleClearAndValidate}
          className={styles.clearCartBtn}
        >
          Clear Cart
        </button>

        <div className={styles.paymentIcons}>
          <img src={visaIcon} alt="Visa" className={styles.paymentIcon} />
          <img src={mastercardIcon} alt="MasterCard" className={styles.paymentIcon} />
        </div>
      </div>
    </div>
  );
}
