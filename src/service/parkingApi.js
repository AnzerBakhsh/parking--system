
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const parkingApi = createApi({
  reducerPath: 'parkingApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.23:5005' }), 
  endpoints: (builder) => ({
    getParkingSlots: builder.query({
      query: () => '/parking_lot/status', 
    }),
  }),
});

export const { useGetParkingSlotsQuery } = parkingApi;
