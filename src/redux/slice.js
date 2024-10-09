import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  searchString: '',
};

const slice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearStore: (state) => {
      state.cart = [];
      state.searchString = '';
    },
  },
});

export const { setProducts, addToCart, removeFromCart, updateQuantity, clearStore } = slice.actions;
export default slice.reducer;
