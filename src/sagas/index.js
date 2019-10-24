import { watchfindCustomers, watchfindOneCustomers } from "./CustomerSaga";
import { watchgetAccountByCIF } from "./CustomerAccountSagas";

import { all, fork } from "redux-saga/effects";

export default function* sagas() {
  yield all([
    fork(watchfindCustomers),
    fork(watchfindOneCustomers),
    fork(watchgetAccountByCIF)
  ]);
}
