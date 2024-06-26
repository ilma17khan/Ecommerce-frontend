import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import '../css/ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
      // Add more products here
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="product-page">
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
