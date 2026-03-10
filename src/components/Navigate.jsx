import React, { memo } from "react";
import { Link } from "react-router-dom";

const Navigation = memo(() => (
  <nav style={{ marginBottom: "20px" }}>
    <Link to="/">Home</Link> |{" "}
    <Link to="/products">Products</Link> |{" "}
    <Link to="/contact">Contact</Link>
  </nav>
));

export default Navigation;