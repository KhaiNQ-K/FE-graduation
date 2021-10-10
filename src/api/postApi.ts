import { ListParams, ListResponse, Post } from 'models';
import axiosClient from './axiosClient';

const postApi = {
  getAll: (params: ListParams): Promise<ListResponse<Post>> => {
    const url = 'posts';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<Post> => {
    const url = `posts/${id}`;
    return axiosClient.get(url);
  },
  add: (data: Post): Promise<Post> => {
    const url = `posts`;
    return axiosClient.post(url, data);
  },
  update: (id: string, data: Post): Promise<Post> => {
    const url = `posts/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: string): Promise<any> => {
    const url = `posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default postApi;
