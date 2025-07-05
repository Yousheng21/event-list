import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';

import { BASE_URL } from '../constants/settings';

const headers: Readonly<Record<string, string | boolean>> = {};

export const instance = axios.create({
  headers,
  baseURL: BASE_URL,
});

export const injectToken = async (config: AxiosRequestConfig): Promise<any> => {
  try {
    const token = 'token';

    if (!config.headers) {
      throw new Error(
        'method injectToken: config.headers имеет значение undefined',
      );
    }
    if (token !== null) {
      config.headers.Authorization = '';
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const injectHandleErrors = async (error: any) => {
  const { status } = error.response;
  const { config } = error;

  switch (status) {
    case HttpStatusCode.InternalServerError: {
      break;
    }
    case HttpStatusCode.Unauthorized: {
      const newAccessToken = '';

      config._retry = true;
      config.headers.Authorization = `Bearer ${newAccessToken}`;

      try {
        const res = await instance(config);
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    }
    case HttpStatusCode.TooManyRequests: {
      break;
    }
    case HttpStatusCode.GatewayTimeout:
    case HttpStatusCode.BadGateway: {
      console.warn('connectServerAlert', 'error');
      break;
    }
    case HttpStatusCode.Forbidden: {
      console.warn('Недостаточно прав', 'error');
      break;
    }
  }

  return Promise.reject(error);
};

instance.interceptors.request.use(injectToken, error => Promise.reject(error));
instance.interceptors.response.use(response => response, injectHandleErrors);
