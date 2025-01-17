import { all } from "redux-saga/effects";

import { FetchCatsSaga } from "@/entities/Cats/model/catsSaga";

export default function* rootSaga() {
  yield all([FetchCatsSaga()]);
}
