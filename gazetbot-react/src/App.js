import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./screens/components/Header";
import Home from "./screens/Home";
import Products from "./screens/products/Products";
import Product from "./screens/product/Product";
import Footer from "./screens/components/Footer";
import Err404 from "./screens/Err404";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<>Deals</>} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:subcategory" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
