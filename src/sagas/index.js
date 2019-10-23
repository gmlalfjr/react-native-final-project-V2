import { watchfindCustomers } from "./CustomerSaga";

import { all, fork } from "redux-saga/effects";

export default function* sagas() {
  yield all([fork(watchfindCustomers)]);
}
