import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
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
