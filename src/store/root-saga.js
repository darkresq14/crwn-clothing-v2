import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories.saga";

// * ES6 Generator Function
export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
