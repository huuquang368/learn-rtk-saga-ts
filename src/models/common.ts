export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParam {
  _page: number;
  _limit: number;
  _sort: number;
  _order: 'asc' | 'desc';
  [key: string]: any;
}
