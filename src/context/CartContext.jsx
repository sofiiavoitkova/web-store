import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to validate cart items
  const validateCart = () => {
    if (cartItems.length === 0) {
      console.log('Cart is empty. All good!');
      return true;
    }

    const allItemsAreValid = cartItems.every(
      (item) =>
        item.id !== undefined &&
        item.name !== undefined &&
        item.quantity !== undefined &&
        item.quantity > 0
    );

    if (allItemsAreValid) {
      console.log('All cart items are valid.');
    } else {
      console.log('Some cart items are invalid.');
    }

    return allItemsAreValid;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, validateCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
