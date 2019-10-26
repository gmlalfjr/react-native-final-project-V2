import { watchFindOneCustomers } from "./CustomerSaga";
import { watchgetAccountByCIF } from "./CustomerAccountSagas";
import { all, fork } from "redux-saga/effects";

export default function* sagas() {
  yield all([
    fork(watchFindOneCustomers),
    fork(watchgetAccountByCIF)
  ]);
}
