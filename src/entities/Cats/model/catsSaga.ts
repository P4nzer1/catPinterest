import { call, put, select, takeLatest } from "redux-saga/effects";

import { RootState } from "../../../app/config/store";
import { getCats } from "../api/catsApi";
import { Cats, GetCatsParams } from "../lib/types";
import {
    fetchCatsStart,
    fetchCatsSuccess,
    fetchCatsFailure,
    incrementPage
} from "./catsSlice";

function* onFetchCats() {
    try {
      const { limit, page }: GetCatsParams = yield select(
        (state: RootState) => ({
          limit: state.cats.limit, 
          page: state.cats.page,  
        })
      );
      const cats: Cats[] = yield call(getCats, { limit, page });
      yield put(fetchCatsSuccess(cats));
      yield put(incrementPage());
    } catch (error) {
      if (error instanceof Error) {
        yield put(fetchCatsFailure(error.message));
      } else {
        yield put(fetchCatsFailure("Неизвестная ошибка"));
      }
    }
  }

export function* FetchCatsSaga() {
  yield takeLatest(fetchCatsStart.type, onFetchCats);
}
