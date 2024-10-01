import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.scss";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack4.jpg";
import pack4 from "../assets/pack5.jpg";
import pack2Alt from "../assets/pack2Alt.jpg";
import pack1Alt1 from "../assets/pack1Alt1.jpg";
import pack1Alt2 from "../assets/pack1Alt2.jpg";
import pack1Alt3 from "../assets/pack1Alt3.jpg";
import pack1Alt4 from "../assets/pack1Alt4.jpg";

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
    description: "Detailed description of The Pace Backpack.",
    images: [pack2, pack2Alt],
  },
  {
    id: 56789,
    title: "Adventure Backpack",
    price: 350.0,
    image: pack3,
    description: "Detailed description of Adventure Backpack.",
    images: [pack3],
  },
  {
    id: 67890,
    title: "Explorer Backpack",
    price: 135.0,
    image: pack4,
    description: "Detailed description of Explorer Backpack.",
    images: [pack4],
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
    <div className="product-details">
      <div className="image-container">
        <img
          src={selectedImage}
          alt={product.title}
          className="product-image"
        />
        <div className="image-gallery">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index + 1}`}
              className="thumbnail"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        {product.inStock && (
          <p className="in-stock">
            <i className="fas fa-check-circle"></i> In stock
          </p>
        )}
        <div className="description">
          {product.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <p className="price">Price: ${product.price.toFixed(2)}</p>
        <div className="actions">
          <button
            className="add-to-cart-btn"
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
