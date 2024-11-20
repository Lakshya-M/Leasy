import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Upload from "./components/Upload";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {
  const [productList, setProductList] = useState([]);

  const addProduct = (product) => {
    setProductList((prev) => [...prev, product]);
  };

  const removeProduct = (id) => {
    setProductList((prev) => prev.filter((product) => product.id !== id)); // Remove product by id
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={<Explore productList={productList} removeProduct={removeProduct} />}
          />
          <Route path="/upload" element={<Upload addProduct={addProduct} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
