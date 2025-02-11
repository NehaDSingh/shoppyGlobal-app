import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './cartSlice.js';

const cartStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
  // Optional: Redux DevTools configuration (generally not needed)
  // devTools: process.env.NODE_ENV !== 'production',
});

export default cartStore;
