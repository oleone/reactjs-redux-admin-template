/**
 * Unção de todos nossos sagas
 */
import { all, takeLatest } from "redux-saga/effects";

import { BasicsTypes } from "./basics/types";
import { load } from "./basics/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(BasicsTypes.LOAD_REQUEST, load)]);
}
