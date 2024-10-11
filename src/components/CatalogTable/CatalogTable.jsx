import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./сatalogTable.module.scss";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";

const productsData = [
  {
    id: 67890,
    title: "Explorer Backpack",
    description: "Rugged, spacious design for extended travel",
    image: product1,
    price: 135.0,
  },
  {
    id: 23412,
    title: "The Pace Backpack",
    description: "Lightweight and versatile for daily adventures",
    image: product2,
    price: 250.0,
  },
  {
    id: 56789,
    title: "Adventure Backpack",
    description: "Water-resistant, multi-compartment outdoor pack",
    image: product3,
    price: 350.0,
  },
];

export default function CatalogTable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const results = productsData.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.catalogContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />

      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
              </td>
              <td>{product.title}</td>
              <td className={styles.descriptionCell}>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.id}</td>
              <td>
                <button
                  className={styles.quickViewBtn}
                  onClick={() => handleProductClick(product.id)}
                >
                  Quick View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
