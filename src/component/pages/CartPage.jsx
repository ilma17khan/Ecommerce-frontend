import React from 'react';
import Cart from '../Cart';
import '../css/CartPage.css';

function CartPage() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
    // Add more cart items here
  ];

  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;
