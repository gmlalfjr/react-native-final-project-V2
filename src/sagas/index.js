import { watchFindOneCustomers } from "./CustomerSaga";
import { watchgetAccountByCIF } from "./CustomerAccountSagas";
import { watchFindLoan } from "./LoanSagas";
import { all, fork } from "redux-saga/effects";

export default function* sagas() {
  yield all([
    fork(watchFindOneCustomers),
    fork(watchgetAccountByCIF),
    fork(watchFindLoan)
  ]);
}
