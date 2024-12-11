
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
  reducerPath: 'vehicleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.10.23:5005/',
  }),
  endpoints: (builder) => ({
    
    parkVehicle: builder.mutation({
      query: (data) => ({
        url: 'vehicle/park',
        method: 'POST',
        body: data,
      }),
    }),
    
    exitVehicle: builder.mutation({
      query: (ticketId) => ({
        url: 'vehicle/exit',
        method: 'POST',
        body: { ticketId }, 
      }),
    }),
  }),
});

export const { useParkVehicleMutation, useExitVehicleMutation } = vehicleApi;
