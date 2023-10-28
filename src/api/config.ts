import { type AxiosResponse, type AxiosError } from 'axios';

const axios = require('axios').default;
const apiClientConfig: any = {
  baseURL: 'http://192.168.254.17:3000/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const apiClient = axios.create(apiClientConfig);
