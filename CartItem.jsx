import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of plants in cart
  const totalCartAmount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total cost of all items
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      // Remove item when quantity reaches 0
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon! We are working on our checkout experience. 🌿');
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <div className="cart-empty">
          <p>Your cart is empty. Start adding some plants!</p>
          <button className="btn-primary" onClick={() => onNavigate('products')}>
            Browse Plants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {/* Cart Items List */}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          {/* Plant thumbnail */}
          <div className="cart-item-thumbnail">{item.emoji}</div>

          {/* Plant name and unit price */}
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-unit-price">Unit price: ${item.price.toFixed(2)}</div>
          </div>

          {/* Quantity controls - increase and decrease */}
          <div className="quantity-controls">
            <button
              className="qty-decrease"
              onClick={() => handleDecrement(item)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="qty-value">{item.quantity}</span>
            <button
              className="qty-increase"
              onClick={() => handleIncrement(item)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Total cost for this plant */}
          <div className="cart-item-total-cost">
            ${(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Delete button to remove item from cart */}
          <button
            className="delete-item-btn"
            onClick={() => handleDelete(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="cart-summary">
        {/* Total plants in cart */}
        <div className="cart-summary-row">
          <span>Total plants in cart:</span>
          <span>{totalCartAmount}</span>
        </div>

        {/* Total cost */}
        <div className="cart-total-row">
          <span>Total Cost:</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>

        <div className="cart-actions">
          {/* Continue shopping button links back to product listing */}
          <button
            className="continue-shopping-btn"
            onClick={() => onNavigate('products')}
          >
            ← Continue Shopping
          </button>

          {/* Checkout button - shows "Coming Soon" */}
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
