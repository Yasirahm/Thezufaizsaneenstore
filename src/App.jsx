import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Order from "./components/Order";
import ProductPage from "./components/ProductPage"; // ✅ Import ProductDetails

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page with Full-Screen Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Products />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Product Pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* ✅ Add Product Details Route */}
        
        {/* Other Pages */}
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
