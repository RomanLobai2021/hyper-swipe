import { all } from "redux-saga/effects";
import cardsSaga from "./cards.saga";

export default function* rootSaga() {
  yield all([cardsSaga()]);
}
