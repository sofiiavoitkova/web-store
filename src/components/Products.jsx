import "../styles/Products.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/How-to-Choose-a-Pack_7G8A5173-scaled.jpg";
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack4.jpg";
import pack4 from "../assets/pack5.jpg";

export default function Products() {
  const navigate = useNavigate();

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
                  onClick={() => navigate("/catalog")} // Use navigate for internal routing
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
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a
                        href="product.html"
                        className="product-link"
                        data-id="34562"
                      >
                        <img src={pack1} alt="Tor Backpack" loading="lazy" />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn cart-btn"
                          data-id="34562"
                        >
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <p>Add to Cart</p>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a
                          href="product.html"
                          className="product-link"
                          data-id="34562"
                        >
                          Tor Backpack
                        </a>
                      </h3>
                      <div className="card-price">
                        <data>$480.75</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a
                        href="product.html"
                        className="product-link"
                        data-id="23412"
                      >
                        <img
                          src={pack2}
                          alt="The Pace Backpack"
                          loading="lazy"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn cart-btn"
                          data-id="23412"
                        >
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <p>Add to Cart</p>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a
                          href="product.html"
                          className="product-link"
                          data-id="23412"
                        >
                          The Pace Backpack
                        </a>
                      </h3>
                      <div className="card-price">
                        <data>$250.0</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a
                        href="product.html"
                        className="product-link"
                        data-id="56789"
                      >
                        <img
                          src={pack3}
                          alt="Adventure Backpack"
                          loading="lazy"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn cart-btn"
                          data-id="56789"
                        >
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <p>Add to Cart</p>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a
                          href="product.html"
                          className="product-link"
                          data-id="56789"
                        >
                          Adventure Backpack
                        </a>
                      </h3>
                      <div className="card-price">
                        <data>$350.0</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a
                        href="product.html"
                        className="product-link"
                        data-id="67890"
                      >
                        <img
                          src={pack4}
                          alt="Explorer Backpack"
                          loading="lazy"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn cart-btn"
                          data-id="67890"
                        >
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <p>Add to Cart</p>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a
                          href="product.html"
                          className="product-link"
                          data-id="67890"
                        >
                          Explorer Backpack
                        </a>
                      </h3>
                      <div className="card-price">
                        <data>$135.0</data>
                      </div>
                    </div>
                  </div>
                </li>
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
