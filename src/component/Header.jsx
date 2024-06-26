import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><Link to="/">E-Shop</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
