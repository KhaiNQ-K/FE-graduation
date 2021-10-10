import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers = {
        Authorization: 'Bearer ' + accessToken,
      };
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response && response.data) {
      return response;
    }
  },
  (error) => Promise.reject(error)
);
export default axiosClient;
