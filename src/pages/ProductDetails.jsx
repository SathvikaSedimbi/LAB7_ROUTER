import React from "react";
import { useParams, Routes, Route, Link, Outlet } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail - ID: {id}</h1>
      <nav>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Routes>
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <Outlet />
    </div>
  );
}

function Reviews() {
  const { id } = useParams();
  return <p>Showing reviews for product {id}</p>;
}

export default ProductDetail;