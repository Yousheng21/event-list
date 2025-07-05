import { INews, INewsDetail } from '../interfaces/news.interface';

import { api, StoreTagTypes } from './api';

export interface INewsListResponse {
  page: {
    content: INews[];
    total: number;
  };
}

export interface IParams {
  current: number;
  next: number;
  total: number;
}

export const newsApi = api.injectEndpoints({
  endpoints: build => ({
    getNewsById: build.query<INewsDetail, { id: string }>({
      query: ({ id }) => {
        const url = `/api-gateway/v1/${id}`;

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
    getNewsList: build.query<INewsListResponse, { params: IParams }>({
      query: ({ params }) => ({
        url: `/api-gateway/v1/common-tasks/view/all-tasks`,
        data: params,
        method: 'POST',
      }),
      providesTags: () => {
        return [{ type: StoreTagTypes.News, id: 'NEWS_LIST' }];
      },
    }),
    paggingNewsList: build.mutation<INewsListResponse, { params: IParams }>({
      query: ({ params }) => ({
        url: `/api-gateway/v1/common-tasks/view/all-tasks`,
        data: params,
        method: 'POST',
      }),
      async onQueryStarted({ params }, { dispatch, queryFulfilled }) {
        try {
          const { data: response } = await queryFulfilled;

          dispatch(
            newsApi.util.updateQueryData(
              'getNewsList',
              { params: params },
              (draft: INewsListResponse) => {
                draft.page.content.push(...response.page.content);
              },
            ),
          );
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  useGetNewsByIdQuery,
  useGetNewsListQuery,
  usePaggingNewsListMutation,
} = newsApi;
