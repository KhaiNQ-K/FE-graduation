import { ListParams, ListResponse, User } from 'models';
import axiosClient from './axiosClient';

const customerApi = {
  getAll: (params: ListParams): Promise<ListResponse<User>> => {
    const url = 'users';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<User> => {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },
  add: (data: User): Promise<User> => {
    const url = `users`;
    return axiosClient.post(url, data);
  },
  update: (id: string, data: User): Promise<User> => {
    const url = `users/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: string): Promise<any> => {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  },
};
export default customerApi;
