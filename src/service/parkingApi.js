
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_API_URL_DATA
console.log(BASE_URL)
export const parkingApi = createApi({
  reducerPath: 'parkingApi', 
  baseQuery: fetchBaseQuery({baseUrl : `${BASE_URL}`}), 
  endpoints: (builder) => ({
    getParkingSlots: builder.query({
      query: () => '/parking_lot/status', 
    }),
  }),
});

export const { useGetParkingSlotsQuery } = parkingApi;
