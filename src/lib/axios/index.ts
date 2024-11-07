import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
  },
});
