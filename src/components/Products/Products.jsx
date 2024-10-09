import styles from "./products.module.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import heroImage from "../../assets/How-to-Choose-a-Pack_7G8A5173-scaled.jpg";
import pack1 from "../../assets/pack1.jpg";
import pack2 from "../../assets/pack2.jpg";
import pack3 from "../../assets/pack4.jpg";
import pack4 from "../../assets/pack5.jpg";

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 34562, title: "Tor Backpack", price: 480.75, image: pack1 },
    { id: 23412, title: "The Pace Backpack", price: 250.0, image: pack2 },
    { id: 56789, title: "Adventure Backpack", price: 350.0, image: pack3 },
    { id: 67890, title: "Explorer Backpack", price: 135.0, image: pack4 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <main>
        <article>
          <div className="container">
            <section
              className={styles.hero}
              id="home"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            >
              <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                  <p className={styles.heroSubtitle}>
                    Lightweight. Durable. Reliable.
                  </p>
                  <h2 className={styles.heroTitle}>
                    Gear That Goes the Distance
                  </h2>
                  <button
                    className={styles.btnPrimary}
                    onClick={() => navigate("/catalog")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </section>

            <section className={styles.productSection}>
              <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Products of the week</h2>
                <ul className={styles.productList}>
                  {products.map((product) => (
                    <li key={product.id}>
                      <div
                        className={styles.productCard}
                        onClick={() => handleProductClick(product.id)}
                      >
                        <figure className={styles.cardBanner}>
                          <img
                            src={product.image}
                            alt={product.title}
                            loading="lazy"
                          />
                        </figure>
                        <div className={styles.cardContent}>
                          <h3 className={styles.cardTitle}>{product.title}</h3>
                          <div className={styles.cardPrice}>
                            <data>${product.price.toFixed(2)}</data>
                          </div>
                        </div>
                        <div className={styles.cardActions}>
                          <button
                            className={styles.cardActionBtn}
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
                  className={styles.btnOutline}
                  onClick={() => navigate("/catalog")}
                >
                  View Catalog
                </button>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
