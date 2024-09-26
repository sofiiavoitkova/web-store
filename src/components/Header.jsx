import "../styles/Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo1 from "../assets/logo1.jpg";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen] = useState(false);

  return (
    <header className="header" data-header>
      <div className="container">
        <div className="header-logo">
          <Link to="/" className="logo">
            <img src={logo1} alt="logo" width="230" height="31" />
          </Link>
        </div>

        <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="navbar-link">
                Catalog
              </Link>
            </li>
            <li>
              <a href="#" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="header-action-btn">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Sign in</p>
          </button>

          <button className="header-action-btn">
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Wishlist</p>
            <div className="btn-badge" aria-hidden="true">
              2
            </div>
          </button>

          <button
            className="header-action-btn"
            onClick={() => navigate("/cart")}
          >
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Cart</p>
          </button>
        </div>
      </div>
    </header>
  );
}
