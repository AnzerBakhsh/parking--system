import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const parkingLotApi = createApi({
  reducerPath: 'parkingLotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.10.23:5005', // Replace with your API's base URL
    prepareHeaders: (headers) => {
      // Add your custom headers if needed, e.g., Authorization token
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the POST /parking_lot endpoint
    createParkingLot: builder.mutation({
      query: (lotData) => ({
        url: '/parking_lot',
        method: 'POST',
        body: lotData,
      }),
    }),
  }),
});

export const { useCreateParkingLotMutation } = parkingLotApi;
