import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

// Plant data: 3 categories, 6 unique houseplants each
const plantData = [
  {
    category: 'Tropical Plants',
    plants: [
      { id: 1, name: 'Monstera Deliciosa', price: 24.99, emoji: '🌿', category: 'Tropical Plants' },
      { id: 2, name: 'Bird of Paradise', price: 39.99, emoji: '🌺', category: 'Tropical Plants' },
      { id: 3, name: 'Fiddle Leaf Fig', price: 34.99, emoji: '🍃', category: 'Tropical Plants' },
      { id: 4, name: 'Banana Plant', price: 19.99, emoji: '🌴', category: 'Tropical Plants' },
      { id: 5, name: 'Peace Lily', price: 17.99, emoji: '🤍', category: 'Tropical Plants' },
      { id: 6, name: 'Elephant Ear', price: 22.99, emoji: '🌱', category: 'Tropical Plants' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { id: 7, name: 'Aloe Vera', price: 12.99, emoji: '🌵', category: 'Succulents' },
      { id: 8, name: 'Jade Plant', price: 14.99, emoji: '💚', category: 'Succulents' },
      { id: 9, name: 'Echeveria', price: 9.99, emoji: '🌸', category: 'Succulents' },
      { id: 10, name: 'Haworthia', price: 11.99, emoji: '⭐', category: 'Succulents' },
      { id: 11, name: "Burro's Tail", price: 13.99, emoji: '🟢', category: 'Succulents' },
      { id: 12, name: 'String of Pearls', price: 16.99, emoji: '🔵', category: 'Succulents' },
    ],
  },
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 13, name: 'Spider Plant', price: 10.99, emoji: '🕸️', category: 'Air Purifying Plants' },
      { id: 14, name: 'Snake Plant', price: 15.99, emoji: '🗡️', category: 'Air Purifying Plants' },
      { id: 15, name: 'Golden Pothos', price: 9.99, emoji: '💛', category: 'Air Purifying Plants' },
      { id: 16, name: 'Rubber Plant', price: 18.99, emoji: '⚫', category: 'Air Purifying Plants' },
      { id: 17, name: 'Boston Fern', price: 14.99, emoji: '🌾', category: 'Air Purifying Plants' },
      { id: 18, name: 'English Ivy', price: 11.99, emoji: '🍀', category: 'Air Purifying Plants' },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if a plant is already in the cart
  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addItem(plant));
    }
  };

  return (
    <div className="products-page">
      <h2>Our Plants</h2>
      <p>Browse our handpicked collection of beautiful houseplants.</p>

      {plantData.map((categoryGroup) => (
        <div key={categoryGroup.category} className="category-section">
          <h3 className="category-title">{categoryGroup.category}</h3>
          <div className="plant-grid">
            {categoryGroup.plants.map((plant) => {
              const added = isInCart(plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  {/* Plant thumbnail with emoji */}
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
