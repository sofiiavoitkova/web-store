import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
