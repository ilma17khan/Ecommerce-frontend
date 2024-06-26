import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductCart.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="btn">View Details</Link>
    </div>
  );
}

export default ProductCard;
