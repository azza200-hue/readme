import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navbar - appears on all pages */}
      <nav className="navbar">
        <div className="navbar-logo">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <a onClick={() => navigate('home')}>Home</a>
          <a onClick={() => navigate('products')}>Plants</a>
          <a onClick={() => navigate('about')}>About</a>
          <div className="cart-button" onClick={() => navigate('cart')}>
            🛒
            <span className="cart-badge">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {/* Landing Page */}
      {currentPage === 'home' && (
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge">Premium Plant Shop</div>
            <h1>
              Welcome to <span>Paradise Nursery</span>
            </h1>
            <p>
              Bring nature's beauty into your home. Discover our curated collection of
              lush houseplants, handpicked for quality and vitality.
            </p>
            <button className="btn-primary" onClick={() => navigate('products')}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Products / Plant Listing Page */}
      {currentPage === 'products' && (
        <ProductList onNavigate={navigate} />
      )}

      {/* Cart Page */}
      {currentPage === 'cart' && (
        <CartItem onNavigate={navigate} />
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <AboutUs />
      )}
    </div>
  );
}

export default App;
