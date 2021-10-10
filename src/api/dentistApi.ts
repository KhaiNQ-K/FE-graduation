import { Dentist, ListParams, ListResponse } from 'models';
import axiosClient from './axiosClient';

const dentistApi = {
  getAll: (params: ListParams): Promise<ListResponse<Dentist>> => {
    const url = 'dentists';
    return axiosClient.get(url, { params });
  },
  getById: (id: string): Promise<Dentist> => {
    const url = `dentists/${id}`;
    return axiosClient.get(url);
  },
  add: (data: Dentist): Promise<Dentist> => {
    const url = `dentists`;
    return axiosClient.post(url, data);
  },
  update: (id: string, data: Dentist): Promise<Dentist> => {
    const url = `dentists/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: string): Promise<any> => {
    const url = `dentists/${id}`;
    return axiosClient.delete(url);
  },
};

export default dentistApi;
