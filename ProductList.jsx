import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

// ... (keep your plantData constant exactly as it is) ...

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity dynamically
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addItem(plant));
    }
  };

  return (
    <div className="products-page">
      <h2>Our Plants</h2>
      {/* ADDED: This satisfies the requirement to show dynamic cart quantity */}
      <div className="cart-total-display">
        <p>Total Items in Cart: <strong>{totalQuantity}</strong></p>
      </div>
      
      <p>Browse our handpicked collection of beautiful houseplants.</p>

      {plantData.map((categoryGroup) => (
        <div key={categoryGroup.category} className="category-section">
          <h3 className="category-title">{categoryGroup.category}</h3>
          <div className="plant-grid">
            {categoryGroup.plants.map((plant) => {
              const added = isInCart(plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  <div className="plant-thumbnail">{plant.emoji}</div>
                  <div className="plant-info">
                    <div className="plant-name">{plant.name}</div>
                    <div className="plant-price">${plant.price.toFixed(2)}</div>
                    <button
                      className={`add-to-cart-btn ${added ? 'in-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                    >
                      {added ? '✓ Added to Cart' : '+ Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
