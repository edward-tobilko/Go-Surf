import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currentCityApi = createApi({
  reducerPath: "currentCityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }),
  endpoints: (build) => ({
    getCurrentCity: build.query({
      query: () => `?appid=05e00602435d177e433999ddc511de86&q=Miami`,
    }),
  }),
});

export const { useGetCurrentCityQuery } = currentCityApi;
