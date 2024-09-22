// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './src/slices/customerSlice'; // Import the customer slice reducer

// Configure the Redux store
export const store = configureStore({
  devTools:true,
  reducer: {
    customer: customerReducer, // Attach the customer reducer
  },
});
