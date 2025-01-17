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
  remainingCats: Cats[];
  loading: boolean;
  error: string | null;
  limit: number;
  page: number;
}
