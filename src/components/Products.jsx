import "../styles/Products.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import heroImage from "../assets/How-to-Choose-a-Pack_7G8A5173-scaled.jpg";
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack4.jpg";
import pack4 from "../assets/pack5.jpg";

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    { id: 34562, title: "Tor Backpack", price: 480.75, image: pack1 },
    { id: 23412, title: "The Pace Backpack", price: 250.0, image: pack2 },
    { id: 56789, title: "Adventure Backpack", price: 350.0, image: pack3 },
    { id: 67890, title: "Explorer Backpack", price: 135.0, image: pack4 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <main>
        <article>
          <section
            className="hero"
            id="home"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Lightweight. Durable. Reliable.</p>
                <h2 className="h1 hero-title">Gear That Goes the Distance</h2>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/catalog")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </section>

          <section className="product-section">
            <div className="container">
              <h2 className="h2 section-title">Products of the week</h2>
              <ul className="product-list">
                {products.map((product) => (
                  <li key={product.id}>
                    <div
                      className="product-card"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <figure className="card-banner">
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-content">
                        <h3 className="h4 card-title">{product.title}</h3>
                        <div className="card-price">
                          <data>${product.price.toFixed(2)}</data>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button
                          className="card-action-btn cart-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <p>Add to Cart</p>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className="btn btn-outline"
                onClick={() => navigate("/catalog")}
              >
                View Catalog
              </button>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
