export interface GetCatsParams {
  limit: number;
  page: number;
}

export interface Cats {
  id: string;
  url: string;
}

export interface CatsState {
  items: Cats[];
  loading: boolean;
  error: string | null;
  limit: number;
  page: number;
}
