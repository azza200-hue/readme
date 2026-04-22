import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.id === plant.id);
      if (!existingItem) {
        // Add new item to cart with quantity of 1
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          emoji: plant.emoji,
          category: plant.category,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const plantId = action.payload;
      state.items = state.items.filter((item) => item.id !== plantId);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          // Remove item if quantity drops to 0 or below
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
