import { INews } from '../interfaces/news.interface';

import { api, StoreTagTypes } from './api';

export interface INewsListResponse {
  page: {
    content: INews[];
    total: number;
  };
}

export interface IParams {
  take: number;
  skip: number;
  search?: string;
}

export interface IResponseNewsList {
  page: INews[];
  total: number;
}

export const newsApi = api.injectEndpoints({
  endpoints: build => ({
    getNewsById: build.query<INews, { id: string }>({
      query: ({ id }) => {
        const url = `/news/${id}`;

        return {
          url,
          method: 'GET',
        };
      },
      providesTags: (_result, _error, arg) => {
        return [{ type: StoreTagTypes.News, id: arg.id }];
      },
      keepUnusedDataFor: 60,
    }),
    getNewsList: build.query<IResponseNewsList, { params: IParams }>({
      query: ({ params }) => ({
        url: `/news?${Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join('&')}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName} - ${queryArgs.params}`;
      },
      merge: (currentCache, newItems, args) => {
        if (args.arg.params.skip === 0) {
          return newItems;
        } else {
          currentCache.page.push(...newItems.page);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.params.skip !== previousArg?.params.skip ||
          currentArg?.params.search !== previousArg?.params.search
        );
      },
      providesTags: () => {
        return [{ type: StoreTagTypes.News, id: 'NEWS_LIST' }];
      },
    }),
  }),
});

export const { useGetNewsByIdQuery, useGetNewsListQuery } = newsApi;
