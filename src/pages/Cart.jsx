import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Cart from "../components/Cart/Cart.jsx";
import "../styles/CartPage.scss";

export default function CartPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="content-wrapper">
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
