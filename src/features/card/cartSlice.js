import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },

    increase: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload) item.amount = item.amount + 1;
        return item;
      });
    },

    decrease: (state, { payload }) => {
      const todecrease = state.cartItems.find((item) => item.id === payload);
      if (todecrease.amount > 0) {
        todecrease.amount = todecrease.amount - 1;
      }
    },

    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
        amount += item.amount;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

export const { clearCart, removeItem, decrease, increase, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
