export interface PagedResult<T> {
  results: T[];
  limit: number;
  offset: number;
  nextOffset: number;
  totalCount?: number;
}
