import React from 'react';
import './css/Cart.css';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <span>Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
