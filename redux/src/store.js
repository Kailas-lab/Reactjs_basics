
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice'; 

// Configure the Redux store
export const store = configureStore({
  reducer: {
    customers: customerReducer // Attach the customer reducer
  },
});
