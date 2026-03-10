import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigate";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  const [isLoggedIn] = useState(false); // simulate login

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/*" element={<ProductDetail />} />
        <Route
          path="/contact"
          element={
            <ProtectedRoute isAuth={isLoggedIn}>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;