import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosError, Method } from 'axios';

import { instance } from '../api/http';
import { BASE_URL } from '../constants/settings';

export enum StoreTagTypes {
  News = 'News',
}

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async (args: { data?: any; method: Method; url: string }) => {
    try {
      const result = await instance({
        url: baseUrl + args.url,
        method: args.method,
        data: args.data,
      });

      return { data: result.data };
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        const err = axiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }
      return {};
    }
  };

export const api = createApi({
  reducerPath: 'rtkqSplitApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: Object.keys(StoreTagTypes),
  endpoints: () => ({}),
});
