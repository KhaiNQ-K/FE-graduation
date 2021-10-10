import { ListParams, ListResponse, Service } from 'models';
import axiosClient from './axiosClient';

const serviceApi = {
  getAll: (params: ListParams): Promise<ListResponse<Service>> => {
    const url = 'services';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<Service> => {
    const url = `services/${id}`;
    return axiosClient.get(url);
  },
  add: (data: Service): Promise<Service> => {
    const url = `services`;
    return axiosClient.post(url, data);
  },
  update: (id: string, data: Service): Promise<Service> => {
    const url = `services/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: string): Promise<any> => {
    const url = `services/${id}`;
    return axiosClient.delete(url);
  },
};

export default serviceApi;
