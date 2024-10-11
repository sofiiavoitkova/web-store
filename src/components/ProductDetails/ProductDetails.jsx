import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productDetails.module.scss";
import Modal from "../../components/Modal/Modal";
import pack1 from "../../assets/pack1.jpg";
import pack2 from "../../assets/pack2.jpg";
import pack3 from "../../assets/pack4.jpg";
import pack4 from "../../assets/pack5.jpg";

import pack1Alt1 from "../../assets/pack1Alt1.jpg";
import pack1Alt2 from "../../assets/pack1Alt2.jpg";
import pack1Alt3 from "../../assets/pack1Alt3.jpg";
import pack1Alt4 from "../../assets/pack1Alt4.jpg";

import pack2Alt1 from "../../assets/pack2Alt1.jpg";
import pack2Alt2 from "../../assets/pack2Alt2.jpg";
import pack2Alt3 from "../../assets/pack2Alt3.jpg";
import pack2Alt4 from "../../assets/pack2Alt4.jpg";

import pack3Alt1 from "../../assets/pack3Alt1.jpg";
import pack3Alt2 from "../../assets/pack3Alt2.jpg";
import pack3Alt3 from "../../assets/pack3Alt3.jpg";
import pack3Alt4 from "../../assets/pack3Alt4.jpg";

import pack4Alt1 from "../../assets/pack4Alt1.jpg";
import pack4Alt2 from "../../assets/pack4Alt2.jpg";
import pack4Alt3 from "../../assets/pack4Alt3.jpg";
import pack4Alt4 from "../../assets/pack4Alt4.jpg";

const products = [
  {
    id: 34562,
    title: "Tor Backpack",
    price: 480.75,
    image: pack1,
    description: [
      "The Tor 65L backpack is a great travel backpack. Packed with great features, this large backpack has a padded air mesh back, a divisible main compartment, a load balancer, and a back adjustment for comfort when carrying a heavy load.",
      "Dimensions: 71 (H) x 52 (W) x 35 (D) cm.",
      "Fabric type: 100% Polyester",
    ],
    images: [pack1, pack1Alt1, pack1Alt2, pack1Alt3, pack1Alt4],
    inStock: true,
  },
  {
    id: 23412,
    title: "The Pace Backpack",
    price: 250.0,
    image: pack2,
    description: [
      "The Pace 30L Rucksack fits everything you need for your next outdoor adventure. Hydration compatible, with an air flow back system, chest and hip straps, a pack away rain cover and convenient multiple pockets including a bottom compartment with a separate opening.",
      "Dimensions: 52 (H) x 30 (W) 24 (D) cm.",
      "Fabric type: 100% Polyester",
    ],
    images: [pack2, pack2Alt1, pack2Alt2, pack2Alt3, pack2Alt4],
    inStock: true,
  },
  {
    id: 56789,
    title: "Adventure Backpack",
    price: 350.0,
    image: pack3,
    description: [
      "The High 50L Rucksack has more than enough space to carry everything you need for your next outdoor adventure. The backpack has multiple pockets, drawcord closure and a padded airmesh system that provides cushioning for your back.",
      "Dimensions: 52.5 (H) x 33 (W) x 26 (D) cm.",
      "Fabric type: 100% Polyester",
    ],
    images: [pack3, pack3Alt1, pack3Alt2, pack3Alt3, pack3Alt4],
    inStock: true,
  },
  {
    id: 67890,
    title: "Explorer Backpack",
    price: 135.0,
    image: pack4,
    description: [
      "Our Elgon Rucksack has a capacity of 35L - the perfect medium sized bag for big adventures. It is made of ripstop fabric with a waterproof rain cover included. The backpack is durable and has multiple pockets for convenient storage.",
      "Dimensions: 51 (H) x 28 (W) x 22 (D) cm.",
      "Fabric type: 100% Polyester",
    ],
    images: [pack4, pack4Alt1, pack4Alt2, pack4Alt3, pack4Alt4],
    inStock: true,
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const { addToCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setModalOpen(true);
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productDetails}>
      {" "}
      <div className={styles.imageContainer}>
        <img
          src={selectedImage}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.imageGallery}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index + 1}`}
              className={styles.thumbnail}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        {product.inStock && (
          <p className={styles.inStock}>
            <i className="fas fa-check-circle"></i> In stock
          </p>
        )}
        <div className={styles.description}>
          {product.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>
        <div className={styles.actions}>
          <button
            className={styles.addToCartBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
