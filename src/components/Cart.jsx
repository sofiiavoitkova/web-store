import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.scss";
import visaIcon from "../assets/visa.svg";
import mastercardIcon from "../assets/mastercard.svg";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-items-section">
        <h2>My Bag</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>£{item.price.toFixed(2)}</p>
                    <div className="quantity-selector">
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
                      className="remove-btn"
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

      <div className="cart-total-section">
        <h2>Total</h2>
        <p>Sub-total: £{getTotalPrice()}</p>
        <p>
          Delivery: <span>Standard Delivery (Free)</span>
        </p>
        <button className="checkout-btn">Checkout</button>

        <div className="payment-icons">
          <img src={visaIcon} alt="Visa" className="payment-icon" />
          <img src={mastercardIcon} alt="MasterCard" className="payment-icon" />
        </div>
      </div>
    </div>
  );
}
