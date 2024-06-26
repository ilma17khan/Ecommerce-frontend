import React from 'react';
import './css/Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <label>
          Credit Card:
          <input type="text" name="creditCard" required />
        </label>
        <button type="submit" className="btn">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
