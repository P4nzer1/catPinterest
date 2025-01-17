import { call, put, select, takeLatest } from "redux-saga/effects";

import { getCats } from "../api/catsApi";
import { Cats } from "../lib/types";
import {
  fetchCatsStart,
  fetchCatsSuccess,
  fetchCatsFailure,
  saveRemainingCats,
} from "./catsSlice";
import { RootState } from "@/app/config/store";

function* onFetchCats() {
  try {
    const { page, limit }: { page: number; limit: number } = yield select(
      (state: RootState) => ({
        page: state.cats.page,
        limit: state.cats.limit,
      })
    );

    const firstBatch: Cats[] = yield call(getCats, { limit, page });
    const secondBatch: Cats[] = yield call(getCats, { limit, page: page + 1 });

    const initialCats = [...firstBatch, ...secondBatch.slice(0, 5)];
    yield put(fetchCatsSuccess(initialCats));

    const remainingCats = secondBatch.slice(5);
    yield put(saveRemainingCats(remainingCats));
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
