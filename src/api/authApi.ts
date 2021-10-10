import { Auth } from 'models';
import axiosClient from './axiosClient';

const authApi = {
  login: (data: Auth) => {
    const url = '/login';
    return axiosClient.post(url, data);
  },
  register: (data: Auth) => {
    const url = '/register';
    return axiosClient.post(url, data);
  },
};

export default authApi;
