import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const product = {
    id,
    name: `Product ${id}`,
    price: 29.99 * id,
    image: 'https://via.placeholder.com/150',
    description: 'This is a detailed description of the product.',
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductDetailPage;
