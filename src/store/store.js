// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { vehicleApi } from '../service/vehicleApi'; // Import the vehicle API service
import { parkingLotApi } from '../service/parkingLotApi'; // Import the parking lot API service

export const store = configureStore({
  reducer: {
    // Add both API reducers to the store
    [vehicleApi.reducerPath]: vehicleApi.reducer,
    [parkingLotApi.reducerPath]: parkingLotApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(vehicleApi.middleware) // Add vehicleApi middleware
      .concat(parkingLotApi.middleware), // Add parkingLotApi middleware
});
