import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import ProductPage from './component/pages/ProductPage';
import ProductDetailPage from './component/pages/ProductDetailPage';
import CartPage from './component/pages/CartPage';
import CheckoutPage from './component/pages/CheckoutPage';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
