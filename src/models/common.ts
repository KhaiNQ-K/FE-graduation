export interface ListParams {
  page?: number;
  limit?: number;
  sort?: string;

  [key: string]: any;
}
export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}
export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}
