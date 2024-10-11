import styles from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo1 from "../../assets/logo1.jpg";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen] = useState(false);

  const cartItems = useSelector((state) => state.globalState.cart);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logo}>
            <img src={logo1} alt="logo" width="230" height="31" />
          </Link>
        </div>

        <nav
          className={`${styles.navbar} ${isNavOpen ? styles.active : ""}`}
          data-navbar
        >
          <ul className={styles.navbarList}>
            <li>
              <Link to="/" className={styles.navbarLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/catalog" className={styles.navbarLink}>
                Catalog
              </Link>
            </li>
            <li>
              <a href="/contact" className={styles.navbarLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            onClick={() => navigate("/cart")}
          >
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>
            <p className={styles.actionLabel}>Cart</p>
            {cartCount > 0 && (
              <div className={styles.badge} aria-hidden="true">
                {cartCount}
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
