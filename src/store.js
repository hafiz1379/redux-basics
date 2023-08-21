import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/card/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
