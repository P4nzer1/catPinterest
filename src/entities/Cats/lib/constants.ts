import { GetCatsParams, CatsState } from "./types";

export const DEFAULT_PARAMS: GetCatsParams = {
  limit: 15,
  page: 1,
};

export const initialState: CatsState = {
  items: [],
  loading: false,
  error: null,
  limit: 15,
  page: 1
};
